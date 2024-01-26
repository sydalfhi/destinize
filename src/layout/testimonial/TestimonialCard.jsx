import starFill from "./../../assets/icons/star.svg";
import starBorder from "./../../assets/icons/star_border.svg";
const TestimonialCard = ({ item }) => {
  return (
    <div className="flex w-[100%] mx-auto md:min-w-[365px] md:max-w-[366px]   flex-col items-center gap-[30px] border  px-[35px] py-10 rounded-[5px] border-solid border-[#DEDEDE] bg-white">
      <div className="grid place-items-center">
        <img
          src={item.displayPicture}
          alt={item.name}
          className="rounded-full max-w-[150px]"
          loading="lazy"
        />
      </div>
      <div>
        <p
          className=" max-h-[120px] min-h-[100px] overflow-y-auto  text-neutral-500 text-center text-base  font-medium leading-[26px] tracking-[0.2px]"
          style={{ fontFamily: "Plus Jakarta medium" }}
        >
          {item.text}
        </p>
        <div className="flex flex-col  items-center justify-center gap-[15px]  my-[15px]">
          <div className="grid grid-cols-5 space-x-1">
            <img loading="lazy" src={starFill} alt="star" />
            <img loading="lazy" src={starFill} alt="star" />
            <img loading="lazy" src={starFill} alt="star" />
            <img loading="lazy" src={starFill} alt="star" />
            <img loading="lazy" src={starBorder} alt="star_border" />
          </div>
          <p
            className="text-[#23A6F0] text-sm not-italic font-semibold leading-6 tracking-[0.2px]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {item.name}
          </p>
          <p
            className="text-[#252B42] text-sm not-italic font-semibold leading-6 tracking-[0.2px]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {item.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
