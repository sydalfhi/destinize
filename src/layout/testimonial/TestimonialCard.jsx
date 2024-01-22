import starFill from "./../../assets/icons/star.svg";
import starBorder from "./../../assets/icons/star_border.svg";
const TestimonialCard = ({ item }) => {
  return (
    <div className="flex min-w-[365px] max-w-[366px]   flex-col items-center gap-[30px] border md:shadow-[0px_2.767px_2.214px_0px_rgba(0,0,0,0.02),0px_6.65px_5.32px_0px_rgba(0,0,0,0.03),0px_12.522px_10.017px_0px_rgba(0,0,0,0.04),0px_22.336px_17.869px_0px_rgba(0,0,0,0.04),0px_41.778px_33.422px_0px_rgba(0,0,0,0.05),0px_100px_80px_0px_rgba(0,0,0,0.07)] px-[35px] py-10 rounded-[5px] border-solid border-[#DEDEDE] bg-white">
      <div className="grid place-items-center">
        <img
          src={item.displayPicture}
          alt={item.name}
          className="rounded-full"
        />
      </div>
      <div>
        <p
          className=" max-h-20 overflow-y-auto  text-neutral-500 text-center text-base  font-medium leading-[26px] tracking-[0.2px]"
          style={{ fontFamily: "Plus Jakarta medium" }}
        >
          {item.text}
        </p>
        <div className="flex flex-col  items-center justify-center gap-[15px]  my-[15px]">
          <div className="grid grid-cols-5 space-x-1">
            <img src={starFill} alt="star" />
            <img src={starFill} alt="star" />
            <img src={starFill} alt="star" />
            <img src={starFill} alt="star" />
            <img src={starBorder} alt="star_border" />
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