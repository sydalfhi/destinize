import MapIcon from "../assets/images/map.png";
import Sandhika from "../assets/images/pak_dika.jpg";
import Syauqi from "../assets/images/syauqi.jpg";
import Patric from "../assets/images/patic.jpg";
import starFill from "../assets/icons/star.svg";
import starBorder from "../assets/icons/star_border.svg";
import { useRef } from "react";
import { useEffect } from "react";

const Testimonial = () => {
  const slideRef = useRef();
  let data = [
    {
      id: 1,
      displayPicture: Sandhika,
      text: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah ",
      name: "Sandhika Galih",
      label: "Dosen WPU",
    },
    {
      id: 2,
      displayPicture: Syauqi,
      text: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
      name: "Syauqizaidan Khairan Khalaf",
      label: "UI/UX Designer",
    },
    {
      id: 3,
      displayPicture: Patric,
      text: "Bikini Bottom menjadi sangat ramai dikunjungi saat saya memasukkannya di Destinize",
      name: "Syaid Alfarishi",
      label: "Front End Dev",
    },
  ];

  return (
    <section className="mt-[100px] xl:mt-[140px] pb-96 ">
      <p className="label-header md:mb-3 xl:mb-[13px] text-center">
        TESTIMONIAL DESTINIZE
      </p>

      <div className="flex justify-center items-center ">
        <div className="flex justify-center space-x-1 md:space-x-2 xl:space-x-4 items-center ">
          <img
            src={MapIcon}
            alt="mapIcon"
            className="w-[20px] md:w-[28px] xl:w-[40px] max-h-[40px]"
          />
          <h3 className="sub-header-text min-[360px]:text-[18px] min-[428px]:text-[23px]  md:text-[36px] xl:text-5xl ">
            • Apa Kata Mereka Tentang Kami
          </h3>
        </div>
      </div>
      <p className="paragrafh-header-text max-w-[820px] mx-auto mt-2 xl:mt-[18px] text-center">
        Penasaran apa saja review dari pengguna yang memakai aplikasi dan
        website Destinize buat nentuin kemana liburan mereka selanjutnya? Yuk
        cek dibawah!
      </p>

      <div className="mt-[50px] xl:mt-[87px] ">
        <div className="bg-red-500 min-h-10  max-w-[366px]  "></div>
        <div className="flex flex-nowrap  md:justify-between   " ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="flex min-w-[365px] max-w-[366px]   flex-col items-center gap-[30px] border md:shadow-[0px_2.767px_2.214px_0px_rgba(0,0,0,0.02),0px_6.65px_5.32px_0px_rgba(0,0,0,0.03),0px_12.522px_10.017px_0px_rgba(0,0,0,0.04),0px_22.336px_17.869px_0px_rgba(0,0,0,0.04),0px_41.778px_33.422px_0px_rgba(0,0,0,0.05),0px_100px_80px_0px_rgba(0,0,0,0.07)] px-[35px] py-10 rounded-[5px] border-solid border-[#DEDEDE] bg-white"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
