import React from "react";
import { useParams } from "react-router-dom";
import { newProduct } from "../../data/newProducts.js";
import {
  TextH3,
  TextHeader,
  TextInfo,
  TextP,
} from "../../mui-customizations/Typography.js";
import { Box, Button, Rating } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

const ProductOpen = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { palette } = useTheme();
  return (
    <div className="my-6 flex flex-col gap-6">
      <div className="flex desktop:flex-row gap-6 flex-col">
        {newProduct.map((product) => {
          return (
            <>
              {product.id == id ? (
                <>
                  <div className="desktop:w-2/4 w-full">
                    <img className="w-full" src={product.photo} />
                  </div>
                  <div className="desktop:w-2/4 w-full flex flex-col gap-4">
                    <TextHeader>{product.name}</TextHeader>
                    <TextInfo>{product.title}</TextInfo>
                    <div className="flex flex-row gap-2 w-full items-center">
                      <Rating
                        value={product.star}
                        readOnly
                        className=""
                        size="small"
                      />
                      <TextInfo>
                        ({product.comments} {t("newProducts.comment")})
                      </TextInfo>
                    </div>
                    <Box
                      height={"0.1rem"}
                      width={"100%"}
                      bgcolor={"custom.grey"}
                    ></Box>
                    <div>
                      <TextHeader>{t("newProducts.color")}</TextHeader>
                      <div className="flex flex-row gap-3">
                        <div
                          style={{ backgroundColor: product.colors.color1 }}
                          className="w-[40px] h-[40px] rounded-full cursor-pointer"
                        ></div>
                        <div
                          style={{ backgroundColor: product.colors.color2 }}
                          className="w-[40px] h-[40px] rounded-full"
                        ></div>
                        <div
                          style={{ backgroundColor: product.colors.color3 }}
                          className="w-[40px] h-[40px] rounded-full cursor-pointer"
                        ></div>
                        <div
                          style={{ backgroundColor: product.colors.color4 }}
                          className="w-[40px] h-[40px] rounded-full cursor-pointer"
                        ></div>
                        <div
                          style={{ backgroundColor: product.colors.color5 }}
                          className="w-[40px] h-[40px] rounded-full cursor-pointer"
                        ></div>
                      </div>
                    </div>
                    <Box
                      height={"0.1rem"}
                      width={"100%"}
                      bgcolor={"custom.grey"}
                    ></Box>
                    <div className="flex flex-col gap-3">
                      <TextP>
                        {t("newProducts.available")}: {product.avaliable}
                      </TextP>
                      <Button variant="contained" sx={{ borderRadius: "20px"}} size="large" className="py-3 px-6 bg-[#02C981] rounded-full text-[#fff]">
                        {t("helpers.shop")}
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        <TextHeader>{t("newProducts.features")}</TextHeader>
        <div className="flex gap-6 tablet:flex-row flex-col">
          <Box
            bgcolor={"custom.whiteToBlack"}
            className="tablet:w-2/4 w-full p-3 rounded-2xl flex flex-col gap-3"
          >
            <TextH3>{t("newProducts.all")}</TextH3>
            <ul>
              <li
                className={`flex w-full flex-row justify-between py-2 px-4 rounded ${
                  palette.mode == "light"
                    ? "odd:bg-[#FFFFFF]"
                    : "odd:bg-[#FFFFFF1A]"
                }`}
              >
                <TextP>Brand</TextP>
                <TextP>Apple</TextP>
              </li>
              <li
                className={`flex w-full flex-row justify-between py-2 px-4 rounded ${
                  palette.mode == "light"
                    ? "odd:bg-[#FFFFFF]"
                    : "odd:bg-[#FFFFFF1A]"
                }`}
              >
                <TextP>Brand</TextP>
                <TextP>Apple</TextP>
              </li>
              <li
                className={`flex w-full flex-row justify-between py-2 px-4 rounded ${
                  palette.mode == "light"
                    ? "odd:bg-[#FFFFFF]"
                    : "odd:bg-[#FFFFFF1A]"
                }`}
              >
                <TextP>Brand</TextP>
                <TextP>Apple</TextP>
              </li>
              <li
                className={`flex w-full flex-row justify-between py-2 px-4 rounded ${
                  palette.mode == "light"
                    ? "odd:bg-[#FFFFFF]"
                    : "odd:bg-[#FFFFFF1A]"
                }`}
              >
                <TextP>Brand</TextP>
                <TextP>Apple</TextP>
              </li>
            </ul>
          </Box>
          <Box
            bgcolor={"custom.whiteToBlack"}
            className="tablet:w-2/4 w-full p-3 rounded-2xl flex flex-col gap-3"
          >
            <TextH3>{t("newProducts.details")}</TextH3>
            <ul>
              <li
                className={`flex w-full flex-row justify-between py-2 px-4 rounded ${
                  palette.mode == "light"
                    ? "odd:bg-[#FFFFFF]"
                    : "odd:bg-[#FFFFFF1A]"
                }`}
              >
                <TextP>Brand</TextP>
                <TextP>Apple</TextP>
              </li>
              <li
                className={`flex w-full flex-row justify-between py-2 px-4 rounded ${
                  palette.mode == "light"
                    ? "odd:bg-[#FFFFFF]"
                    : "odd:bg-[#FFFFFF1A]"
                }`}
              >
                <TextP>Brand</TextP>
                <TextP>Apple</TextP>
              </li>
              <li
                className={`flex w-full flex-row justify-between py-2 px-4 rounded ${
                  palette.mode == "light"
                    ? "odd:bg-[#FFFFFF]"
                    : "odd:bg-[#FFFFFF1A]"
                }`}
              >
                <TextP>Brand</TextP>
                <TextP>Apple</TextP>
              </li>
              <li
                className={`flex w-full flex-row justify-between py-2 px-4 rounded ${
                  palette.mode == "light"
                    ? "odd:bg-[#FFFFFF]"
                    : "odd:bg-[#FFFFFF1A]"
                }`}
              >
                <TextP>Brand</TextP>
                <TextP>Apple</TextP>
              </li>
            </ul>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ProductOpen;
