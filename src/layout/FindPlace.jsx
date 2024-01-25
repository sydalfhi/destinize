import MapIcon from "../assets/images/map.png";
import BaseMap from "../assets/images/Base.jpg";

import locationAddIcon from "../assets/icons/locationAdd.svg";
import FavoriteIcon from "../assets/icons/favorite.svg";
import MostlyIcon from "../assets/icons/mostly.svg";

const FindPlace = () => {
  const list_base_title =
    "text-[#18214D] text-[20px] xl:text-[22px] not-italic font-extrabold leading-[30px] tracking-[-0.55px] font-Manrope";
  const list_base_desk =
    "text-[#3E4462] text-[14px] xl:text-base not-italic font-medium leading-[26px] w-[220px] min-[375px]:w-[260px]  font-Manrope mt-2";

  const listMapService = [
    {
      icon: locationAddIcon,
      text: "Populer di dekatmu",
      subtext:
        "Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu",
    },
    {
      icon: FavoriteIcon,
      text: "Favorit di dekatmu",
      subtext:
        "Tempat favorit dan disukai semua orang orang di sekitar daerah kamu",
    },
    {
      icon: MostlyIcon,
      text: "Ramai di didekatmu",
      subtext:
        "Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan",
    },
  ];

  return (
    <section className="mt-[40px]">
      <p className="label-header md:mb-3 xl:mb-[13px] text-center">
        CARI TEMPAT WISATA
      </p>

      <div className="flex justify-center items-center ">
        <div className="flex justify-center space-x-1 md:space-x-2 xl:space-x-4 items-center ">
          <img
            src={MapIcon}
            alt="mapIcon"
            className="w-[20px] md:w-[28px] xl:w-[40px] max-h-[40px]"
          />
          <h3 className="sub-header-text min-[360px]:text-[18px] min-[428px]:text-[23px]  md:text-[36px] xl:text-5xl ">
            • Cari Tempat Wisata Didekatmu
          </h3>
        </div>
      </div>
      <p className="paragrafh-header-text max-w-[820px] mx-auto mt-2 xl:mt-[18px]">
        Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat yang
        sedang populer di daerah kamu dengan begitu kamu akan selalu update dan
        gak kudet lagi 👍🏻
      </p>

      <img
        src={BaseMap}
        alt="map"
        className="my-6 xl:my-12 hover:cursor-zoom-in "
        loading="lazy"
      />

      <div className="grid gap-y-5 lg:gap-y-0 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-start">
        {listMapService.map((item, index) => (
          <div className="flex space-x-4 items-start" key={index}>
            <div className="min-w-[49.5px] max-w-[50px]  rounded-full bg-[#EFF2F6] aspect-square grid place-items-center">
              <img
                src={item.icon}
                alt="icon"
                className="w-[24px]"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className={list_base_title}>{item.text}</h1>
              <p className={list_base_desk}>{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindPlace;
