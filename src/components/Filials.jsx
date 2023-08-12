import React from "react";
import shop from "../image/icons/shop.svg";
import location from "../image/icons/location.svg";
import time from "../image/icons/time.svg";
import { useTranslation } from "react-i18next";
import { TextP } from "../mui-customizations/Typography";
import { useTheme } from "@emotion/react";

const Filials = () => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  return (
    <div className="w-full my-6 phone:h-[500px] h-fit">
      <table className="border w-full table-auto">
        <thead>
          <tr
            className={`${
              palette.mode == "light" ? "bg-[#F3F3F3]" : "bg-[#FFFFFF0D]"
            }`}
          >
            <th className="p-4">
              <TextP className="text-start">{t("filial.shop")}</TextP>
            </th>
            <th className="p-4">
              <TextP className="text-center">{t("filial.location")}</TextP>
            </th>
            <th className="p-4">
              <TextP className="text-end">{t("filial.order")}</TextP>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="p-4">Do'kon</td>
            <td className="p-4 text-center">Manzil</td>
            <td className="p-4 text-end">Ish vaqti</td>
          </tr>
          <tr className="border">
            <td className="p-4">Do'kon</td>
            <td className="p-4 text-center">Manzil</td>
            <td className="p-4 text-end">Ish vaqti</td>
          </tr>
          <tr className="border">
            <td className="p-4">Do'kon</td>
            <td className="p-4 text-center">Manzil</td>
            <td className="p-4 text-end">Ish vaqti</td>
          </tr>
          <tr className="border">
            <td className="p-4">Do'kon</td>
            <td className="p-4 text-center">Manzil</td>
            <td className="p-4 text-end">Ish vaqti</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Filials;
