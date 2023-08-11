import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";

const Searchbar = ({ value, setValue }) => {
  const { t } = useTranslation();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={'space-between'}
      gap={"10px"}
      width={"320px"}
      height={"50px"}
      bgcolor={"custom.greyToWhite"}
      borderRadius={'50px'}
      padding={'8px 20px'}
      sx={{
        "@media screen and (max-width: 662px)": {
          width: "100%"
        }
      }}
    >
      <input
        placeholder={t("header.search")}
        className="outline-none bg-transparent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FiSearch className="text-2xl text-[#012350]"/>
    </Box>
  );
};

export default Searchbar;
