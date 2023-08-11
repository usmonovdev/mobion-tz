import React, { useState } from "react";
import logo from "../../image/logo.png";
import whiteLogo from "../../image/logo-white.png";
import { navbarLinks } from "../../data/navbar";
import { useTranslation } from "react-i18next";
import { Box, useTheme } from "@mui/material";
import { TextP } from "../../mui-customizations/Typography";
import { Catalog, Language, Searchbar, ThemeToggle } from "../../ui-helpers";
import { RxHamburgerMenu } from "react-icons/rx";
import Mobile from "./Mobile";

const Navbar = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const { palette } = useTheme()
  return (
    <nav className="w-full h-[96px] flex flex-row items-center justify-between gap-3">
      <div className="desktop:hidden" onClick={() => setOpen(!open)}>
        <RxHamburgerMenu className="text-4xl cursor-pointer" />
      </div>
      <img src={`${palette.mode == "light" ? logo : whiteLogo}`} alt="logo" className="w-[100px] phone:block hidden" />
      <ul className="desktop:flex hidden flex-row gap-4">
        <Catalog />
        {navbarLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="flex flex-row items-center gap-1 cursor-pointer"
            >
              <TextP>{t(link.label)}</TextP>
            </li>
          );
        })}
      </ul>
      <Searchbar value={value} setValue={setValue} />
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"20px"}
        alignItems={"center"}
      >
        <div className="tablet:block hidden">
          <Language />
        </div>
        <Box
          width={"0.1rem"}
          height={"30px"}
          bgcolor={"custom.greyToWhite"}
          className="tablet:block hidden"
        ></Box>
        <div className="tablet:block hidden">
          <ThemeToggle />
        </div>
      </Box>
      <Mobile open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
