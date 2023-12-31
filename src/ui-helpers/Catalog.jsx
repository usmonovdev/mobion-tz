import React, { useState } from "react";
import { TextP } from "../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { navbarCatalog } from "../data/navbar";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const handleOpen = (choice) => {
    navigate(`/choice/${choice}`)
  }

  return (
    <li
      className="flex flex-row items-center gap-1 cursor-pointer relative"
      onClick={() => setOpen(!open)}
    >
      <TextP className="hover:text-[#02C981] transition">{t("header.catalog.title")}</TextP>
      <IoIosArrowDown />
      {open ? (
        <Box width={'200px'} bgcolor={'custom.background'} className="absolute !z-[10000] top-0 mt-8 p-3 flex flex-col gap-5 rounded-lg">
          <ul>
            {navbarCatalog.map((catalog) => {
              return (
                <li key={catalog.id}>
                  <TextP onClick={() => handleOpen(catalog.link)} className="hover:text-[#02C981] transition">{t(catalog.label)}</TextP>
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
