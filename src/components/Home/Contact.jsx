import React from "react";
import { TextH3, TextHeader, TextP } from "../../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";
import location from "../../image/icons/location.svg";
import phone from "../../image/icons/phone-green.svg";
import mail from "../../image/icons/mail.svg";
import telegram from "../../image/icons/telegram-green.svg";
import instagram from "../../image/icons/instagram-green.svg";
import youtube from "../../image/icons/youtube-green.svg";
import facebook from "../../image/icons/facebook-green.svg";
import { useTheme } from "@emotion/react";

const Contact = () => {
  const { t } = useTranslation();
  const { palette } = useTheme()
  return (
    <div>
      <TextHeader marginBottom={"30px"}>{t("contact.title")}</TextHeader>
      <Box
        bgcolor={"custom.contact"}
        padding={"20px"}
        className="rounded-2xl w-full flex tablet:flex-row flex-col laptop:gap-0 gap-4"
      >
        <Box className="laptop:w-3/6 w-full">
          <div className="tablet:w-3/5 w-full mx-auto">
            <div className="flex flex-col gap-1 mb-3">
              <TextP>{t("contact.name")}</TextP>
              <input
                className={`input border rounded-lg transition focus:border-[#02C981] ${palette.mode == "light" ? "bg-[#fff]" : "bg-[#FFFFFF1A]"}`}
                type="text"
                placeholder={t("contact.namePlaceholder")}
              />
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <TextP>{t("contact.phone")}</TextP>
              <input
                className={`input border rounded-lg transition focus:border-[#02C981] ${palette.mode == "light" ? "bg-[#fff]" : "bg-[#FFFFFF1A]"}`}
                type="text"
                placeholder={t("contact.phonePlaceholder")}
              />
            </div>
            <div>
              <TextP>Label</TextP>
              <textarea rows={4} maxLength={200} placeholder="Label" className={`w-full p-2 transition focus:border-[#02C981] outline-none border rounded-lg ${palette.mode == "light" ? "bg-[#fff]" : "bg-[#FFFFFF1A]"}`} />
            </div>
            <Button sx={{ width: "100%", marginTop: "10px" }} variant="contained">{t("contact.submit")}</Button>
          </div>
        </Box>
        <Box className="laptop:w-3/6 w-full">
          <ul className="flex flex-col gap-3">
            <li className="flex flex-row gap-3">
              <img src={location} alt="location" />
              <TextP>
                Tashkent, Mirzo-Ulugbekskiy tumani, mahalla Shaxriobod
              </TextP>
            </li>
            <li className="flex flex-row gap-3">
              <img src={phone} alt="phone" />
              <TextP>
                <a href="tel:+998943320016">+998 94 332 00 16</a>
              </TextP>
            </li>
            <li className="flex flex-row gap-3">
              <img src={mail} alt="email" />
              <TextP>mobion@gmail.com</TextP>
            </li>
            <ul className="flex flex-row gap-4 mt-3">
              <li>
                <a href="#">
                  <img src={telegram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={youtube} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook} />
                </a>
              </li>
            </ul>
          </ul>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
