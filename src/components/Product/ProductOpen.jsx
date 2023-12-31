import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  TextH3,
  TextHeader,
  TextInfo,
  TextP,
} from "../../mui-customizations/Typography.js";
import { Box, Button, CircularProgress, Rating } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import axios from "../../utils/axios-config.js";
import { GET_PRODUCTS } from "../../utils/api-links.js";

const ProductOpen = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { palette } = useTheme();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(GET_PRODUCTS, {
        params: {
          id: id,
        },
      });
      setData(data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="my-6 flex flex-col gap-6">
      <div className="flex desktop:flex-row gap-6 flex-col">
        {isLoading ? (
          <>
            <div className="desktop:w-2/4 w-full">
              <Box
                className="rounded-lg w-full desktop:h-[510px] laptop:h-[530px] tablet:h-[335px] h-[230px] flex items-center justify-center"
                bgcolor={"custom.contact"}
              >
                <CircularProgress />
              </Box>
            </div>
            <div className="desktop:w-2/4 w-full flex flex-col gap-4">
              <Box
                className="w-[200px] h-[48px] mb-4 rounded-2xl"
                bgcolor={"custom.contact"}
              ></Box>
              <div className="w-full flex flex-col gap-4 mb-4">
                <Box
                  className="h-[20px] rounded-2xl w-full"
                  bgcolor={"custom.contact"}
                ></Box>
                <Box
                  className="h-[20px] rounded-2xl w-full"
                  bgcolor={"custom.contact"}
                ></Box>
                <Box
                  className="h-[20px] rounded-2xl w-full"
                  bgcolor={"custom.contact"}
                ></Box>
                <Box
                  className="h-[20px] rounded-2xl w-full"
                  bgcolor={"custom.contact"}
                ></Box>
                <Box
                  className="h-[20px] rounded-2xl w-full"
                  bgcolor={"custom.contact"}
                ></Box>
              </div>
              <Box
                className="w-[200px] h-[48px] rounded-2xl mb-4"
                bgcolor={"custom.contact"}
              ></Box>
              <Box
                className="w-[200px] h-[48px] rounded-2xl mb-4"
                bgcolor={"custom.contact"}
              ></Box>
              <Box
                className="w-full h-[45px] rounded-full mb-4"
                bgcolor={"custom.contact"}
              ></Box>
            </div>
          </>
        ) : (
          <>
            {data.map((data, index) => {
              return (
                <>
                  <div className="desktop:w-2/4 w-full" key={index}>
                    <img
                      className="w-full object-cover h-full rounded-2xl"
                      src={data.image}
                    />
                  </div>
                  <div className="desktop:w-2/4 w-full flex flex-col gap-4">
                    <TextHeader>{data.name}</TextHeader>
                    <TextInfo>
                      {data.description}
                    </TextInfo>
                    <div className="flex flex-row gap-2 w-full items-center">
                      <Rating value={0} readOnly className="" size="small" />
                      <TextInfo>(20 {t("newProducts.comment")})</TextInfo>
                    </div>
                    <Box
                      height={"0.1rem"}
                      width={"100%"}
                      bgcolor={"custom.grey"}
                    ></Box>
                    <TextHeader>
                      {t("newProducts.price")}: {data.price}$
                    </TextHeader>
                    <Box
                      height={"0.1rem"}
                      width={"100%"}
                      bgcolor={"custom.grey"}
                    ></Box>
                    <div>
                      <TextHeader>{t("newProducts.color")}</TextHeader>
                      <div className="flex flex-row gap-3">
                        <div
                          style={{ backgroundColor: data.color }}
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
                      <TextP>{t("newProducts.available")}: 120</TextP>
                      <Button
                        variant="contained"
                        sx={{ borderRadius: "20px", color: "#fff" }}
                        size="large"
                        className="py-3 px-6 bg-[#02C981] rounded-full text-[#fff]"
                      >
                        {t("helpers.shop")}
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductOpen;
