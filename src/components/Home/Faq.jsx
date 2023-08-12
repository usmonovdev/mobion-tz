import { HiChevronUp } from "react-icons/hi";
import { faqs } from "../../data/faqs";
import { useTranslation } from "react-i18next";
import { TextH1, TextH2, TextHeader } from "../../mui-customizations/Typography";
import { useState } from "react";
import styled from "@emotion/styled";

export const StyledTextHeader = styled(TextHeader)(({ theme }) => ({
  fontSize: "32px",
  color: theme.palette.custom.text,
  fontWeight: "600",
  "@media screen and (max-width: 360px)": {
    fontSize: "24px",
  },
}));
export const StyledHeader = styled(TextHeader)(({ theme }) => ({
  fontSize: "32px",
  color: theme.palette.custom.text,
  fontWeight: "400",
  "@media screen and (max-width: 662px)": {
    fontSize: "24px",
  },
}));

const Faq = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(1);
  return (
    <div className="w-full">
      <TextHeader marginBottom={"30px"}>{t("faq.title")}</TextHeader>
      <div className="w-full mx-auto rounded-2xl border overflow-hidden p-4">
        {faqs.map((faq) => {
          return (
            <div
              className="w-full cursor-pointer border border-t-0 border-l-0 border-r-0"
              onClick={() => setOpen(faq.id)}
            >
              <div className="w-full flex flex-row items-center justify-between">
                <TextH1 padding={"10px 0"}>
                  {t(faq.title)}
                </TextH1>
                <HiChevronUp
                  className={`text-4xl transition ${
                    open == faq.id ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`${
                  open == faq.id
                    ? "block translate-y-0"
                    : "hidden -translate-y-5"
                } transition`}
              >
                <TextH2>{t(faq.info)}</TextH2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
