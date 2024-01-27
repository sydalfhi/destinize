import MapIcon from "./../../assets/images/map.png";
import Sandhika from "./../../assets/images/pak_dika.jpg";
import Syauqi from "./../../assets/images/syauqi.jpg";
import Patric from "./../../assets/images/patic.jpg";

import { Fragment, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  let data = [
    {
      id: 1,
      displayPicture: Patric,
      text: "Destinize membantu saya untuk melihat belahan sisi lain dunia yang begitu indah di pandang mata ",
      name: "Syaid Alfarishi",
      label: "Front End Dev",
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
      displayPicture: Sandhika,
      text: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah ",
      name: "Sandhika Galih",
      label: "Dosen WPU",
    },
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [withSwiper, setWithSwiper] = useState(false);

  useEffect(() => {
    setWithSwiper(() => {
      return window.innerWidth < 768 ? true : false;
    });
  }, []);

  return (
    <section className="mt-[100px] xl:mt-[140px] overflow-x-hidden  ">
      <p className="label-header md:mb-3 xl:mb-[13px] text-center">
        TESTIMONIAL DESTINIZE
      </p>

      <div className="flex justify-center items-center ">
        <div className="flex justify-center space-x-1 md:space-x-2 xl:space-x-4 items-center ">
          <img
            src={MapIcon}
            alt="mapIcon"
            className="w-[20px] md:w-[28px] xl:w-[40px] max-h-[40px]"
            loading="lazy"
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

      <div className="mt-[50px] xl:mt-[87px]    overflow-x-hidden">
        <div className="flex flex-nowrap justify-center md:justify-between    md:overflow-x-auto gap-[15px]">
          {withSwiper && (
            <Swiper
              spaceBetween={0}
              centeredSlides={false}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper  "
            >
              {data.map((item, index) => (
                <div
                  className="swiper-slide grid place-items-center"
                  key={index * 10}
                >
                  <SwiperSlide>
                    <TestimonialCard item={item} />
                  </SwiperSlide>
                </div>
              ))}

              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          )}

          {withSwiper ||
            data.map((item, index) => (
              <Fragment key={index}>
                <TestimonialCard item={item} />
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
