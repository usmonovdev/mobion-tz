import React from "react";
import {
  TextHeader,
  TextInfo,
  TextP,
} from "../../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { newProduct } from "../../data/newProducts";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewProducts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleOpen = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <div className="flex flex-col gap-6">
      <TextHeader>{t("newProducts.title")}</TextHeader>
      <div className="cards">
        {newProduct.map((product) => {
          return (
            <div className="flex flex-col gap-2" onClick={() => handleOpen(product.id)}>
              <img src={product.photo} alt={product.name} className="rounded-2xl cursor-pointer"/>
              <div className="flex flex-col gap-2">
                <TextP>{product.name.length > 15 ? <>{product.name.slice(0,15)}...</> : <>{product.name}</>}</TextP>
                <TextInfo>{product.title.slice(0,50)}...</TextInfo>
                <div className="flex flex-row gap-2 w-full items-center">
                  <Rating value={product.star} readOnly className="" size="small" />
                  <TextInfo>
                    ({product.comments} {t("newProducts.comment")})
                  </TextInfo>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProducts;
