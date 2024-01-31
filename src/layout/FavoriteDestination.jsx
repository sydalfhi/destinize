import PlaneIcon from "../assets/images/plane.png";
import RajaAmpat from "../assets/images/raja_ampat.jpg";
import LabuanBajo from "../assets/images/labuan_bajo.jpg";
import KawahIjen from "../assets/images/kawah_ijen.jpg";
import Bromo from "../assets/images/bromo.jpg";

import ArrowIcon from "../assets/icons/arrow.svg";

const FavoriteDestination = () => {
  const card = [
    {
      poster: RajaAmpat,
      text: "Raja Ampat",
      subtext: "Bali",
    },
    {
      poster: LabuanBajo,
      text: "Labuan Bajo",
      subtext: "NTT",
    },
    {
      poster: KawahIjen,
      text: "Kawah Ijen",
      subtext: "Jawa Timur",
    },
    {
      poster: Bromo,
      text: "Bromo",
      subtext: "Jawa Timur",
    },
  ];

  return (
    <section className="mt-[50px] ">
      <p className="label-header md:mb-3 xl:mb-[13px]">DESTINASI FAVORIT</p>

      <div className="flex justify-between items-center ">
        <div className="flex space-x-1 md:space-x-2 xl:space-x-4 items-center ">
          <img
            src={PlaneIcon}
            alt="planeIcon"
            className="w-[12px] min-[360px]:w-[20px] md:w-[28px] xl:w-[40px] max-h-[40px]"
            loading="lazy"
          />
          <h3 className="sub-header-text min-[360px]:text-[19px] min-[428px]:text-[24px] md:text-[36px] xl:text-5xl ">
            • Temukan Destinasi Favoritmu
          </h3>
        </div>

        <div className="hidden lg:block">
          <a href="#" className="link flex space-x-1 xl:space-x-2 items-center">
            <span>Lihat semua</span>
            <span>
              <img
                src={ArrowIcon}
                alt="arrowIcon"
                className="w-full"
                loading="lazy"
              />
            </span>
          </a>
        </div>
      </div>

      {/* swiper */}
      <div className="flex z-50 flex-nowrap  space-x-6 xl:space-x-0 justify-between overflow-x-scroll xl:overflow-hidden mt-[10px] md:mt-4 xl:mt-[46px] ">
        {card.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={item.poster}
              alt={item.text}
              className="w-full full relative z-0"
              loading="lazy"
            />
            <div className="card-banner">
              <p className="card-banner-text">{item.text}</p>
              <p className="card-banner-subtext">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" grid md:hidden place-items-center mt-5">
        <a href="#" className="link flex  space-x-1 xl:space-x-2 items-center">
          <span className="text-sm ">lihat semua</span>
          <span>
            <img src={ArrowIcon} alt="arrowIcon" className="w-full" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default FavoriteDestination;
