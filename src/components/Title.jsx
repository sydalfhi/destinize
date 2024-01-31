import MainIcon from "../assets/images/mainIcon.png";

const TitleComponent = () => {
  return (
    <div className="flex justify-start items-center space-x-2 ">
      <img src={MainIcon} alt="main icon" className="w-7 max-h-7 " />

      <h1
        className="relative z-30 text-black text-lg  font-bold leading-[normal]"
        style={{ fontFamily: "Plus Jakarta bold" }}
      >
        Destinize
      </h1>
    </div>
  );
};

export default TitleComponent;
