import React, { useEffect, useMemo, useState } from "react";
import {
  TextHeader,
  TextInfo,
  TextP,
} from "../../mui-customizations/Typography";
import { useTranslation } from "react-i18next";
import { Box, CircularProgress, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios-config";
import { GET_PRODUCTS } from "../../utils/api-links";
import { TbMoodEmpty } from "react-icons/tb";
import Sort from "../../ui-helpers/Sort";
import { LoadingButton } from "@mui/lab";

const sortData = [
  {
    id: 0,
    name: "products.sort.title",
    value: "all",
  },
  {
    id: 1,
    name: "header.catalog.earbud",
    value: "Quloqchinlar",
  },
  {
    id: 2,
    name: "header.catalog.electronics",
    value: "Elektronika",
  },
  {
    id: 3,
    name: "header.catalog.holster",
    value: "Telefon g'ilof",
  },
  {
    id: 4,
    name: "header.catalog.eyeglass",
    value: "Ko'zoynak",
  },
];

const Products = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [sort, setSort] = useState(sortData[0]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(24);

  const handleOpen = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(GET_PRODUCTS, {
          params: {
            limit: limit,
          },
        });
        setData(data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [limit]);

  function getFilteredList() {
    if (sort.value == "all") {
      return data;
    }
    return data.filter((e) => e.choice == sort.value);
  }

  var filteredData = useMemo(getFilteredList, [sort, data]);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex phone:flex-row flex-col justify-between">
          {isLoading ? (
            <Box
              bgcolor={"custom.contact"}
              className="w-[300px] h-[50px] rounded-lg"
            ></Box>
          ) : (
            <TextHeader data-aos="fade-up">{t("products.title")}</TextHeader>
          )}
          {isLoading ? (
            <Box
              bgcolor={"custom.contact"}
              className="phone:w-[200px] w-full h-[50px] rounded-lg"
            ></Box>
          ) : (
            <Sort data={sortData} selected={sort} setSelected={setSort} />
          )}
        </div>
        {isLoading ? (
          <>
            <Box className="cards">
              {[1, 2, 3, 4].map((data) => {
                return (
                  <Box
                    key={data}
                    bgcolor={"custom.contact"}
                    className="h-[390px] rounded-2xl flex items-center justify-center"
                  >
                    <CircularProgress />
                  </Box>
                );
              })}
            </Box>
          </>
        ) : (
          <>
            {filteredData.length <= 0 ? (
              <>
                <Box className="cards">
                  {[1, 2, 3, 4].map((data) => {
                    return (
                      <Box
                        key={data}
                        bgcolor={"custom.contact"}
                        className="h-[390px] rounded-2xl flex flex-col gap-2 items-center justify-center"
                      >
                        <TbMoodEmpty className="text-6xl opacity-10" />
                        <TextP className="opacity-10">
                          {t("helpers.no_product")}
                        </TextP>
                      </Box>
                    );
                  })}
                </Box>
              </>
            ) : (
              <>
                <div className="cards">
                  {filteredData.map((product) => {
                    return (
                      <div
                        key={product.id}
                        data-aos="fade-up"
                        className="flex flex-col gap-2 max-h-390px"
                        onClick={() => handleOpen(product.id)}
                      >
                        <div className="phone:h-[180px] h-[230px] w-full">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="rounded-2xl cursor-pointer h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <TextP>{product.name}</TextP>
                          <TextInfo>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Fugiat pariatur dolor nesciunt. Numquam
                            perspiciatis
                          </TextInfo>
                          <div className="flex flex-row gap-2 w-full items-center">
                            <Rating
                              value={5}
                              readOnly
                              className=""
                              size="small"
                            />
                            <TextInfo>(11 {t("newProducts.comment")})</TextInfo>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {filteredData.length < limit ? (
                  ""
                ) : (
                  <div className="w-full flex items-center justify-center">
                    <LoadingButton
                      variant="contained"
                      className="w-fit"
                      sx={{ color: "#fff !important" }}
                      loading={isLoading}
                      onClick={() => setLimit(limit + 4)}
                    >
                      {t("helpers.see_all")}
                    </LoadingButton>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Products;
