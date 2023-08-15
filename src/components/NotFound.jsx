import React from "react";
import { useTranslation } from "react-i18next";
import { TextH3, TextP } from "../mui-customizations/Typography";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="h-[500px] w-full flex flex-col items-center justify-center">
      <TextH3>{t("helpers.no_page")}!</TextH3>
      <Link to={"/"}>
        <TextP sx={{ color: "#02C981 !important" }}>{t("helpers.back")}</TextP>
      </Link>
    </div>
  );
};

export default NotFound;
