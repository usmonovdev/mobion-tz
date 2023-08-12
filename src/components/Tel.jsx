import icon from "../image/icons/phone-green.svg";

const Tel = () => {
  return (
    <a href="tel:+998943320016">
    <div className="fixed w-[50px] h-[50px] bg-[#CCF4E6] rounded-full flex items-center justify-center bottom-[50px] right-[50px] shadow cursor-pointer">
      <img src={icon} />
    </div>
    </a>
  );
};

export default Tel;
