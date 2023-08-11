import React, { useState } from "react";
import { TextP } from "../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { navbarCatalog } from "../data/navbar";
import { Box } from "@mui/material";

const Catalog = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <li
      className="flex flex-row items-center gap-1 cursor-pointer relative"
      onClick={() => setOpen(!open)}
    >
      <TextP>{t("header.catalog.title")}</TextP>
      <IoIosArrowDown />
      {open ? (
        <Box bgcolor={'custom.greyToWhite'} className="absolute top-0 mt-8 p-3 flex flex-col gap-5 rounded-lg">
          <ul>
            {navbarCatalog.map((catalog) => {
              return (
                <li>
                  <TextP>{t(catalog.label)}</TextP>
                </li>
              );
            })}
          </ul>
        </Box>
      ) : (
        ""
      )}
    </li>
  );
};

export default Catalog;