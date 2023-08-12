import React from "react";
import { useParams } from "react-router-dom";
import { newProduct } from "../../data/newProducts.js";
import {
  TextHeader,
  TextInfo,
  TextP,
} from "../../mui-customizations/Typography.js";
import { Box, Rating } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProductOpen = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  return (
    <div className="flex desktop:flex-row gap-6 my-6 flex-col">
      {newProduct.map((product) => {
        return (
          <>
            {product.id == id ? (
              <>
                <div className="w-[2/4]">
                  <img src={product.photo} />
                </div>
                <div className="w-[2/4] flex flex-col gap-4">
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
                    <button className="py-3 px-6 bg-[#02C981] rounded-full text-[#fff]">
                      {t("newProducts.btn")}
                    </button>
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
  );
};

export default ProductOpen;
