import WindowIcon from "../assets/images/window.png";
import BromoCover from "../assets/images/bromo_cover.png";
import thumbVidio from "../assets/images/coverThumb.jpg";
import StopIcon from "../assets/icons/stop.svg";

import ArrowIcon from "../assets/icons/arrow.svg";
const Gallery = () => {
  return (
    <section className="mt-[60px] lg:mt-[100px] ">
      <p className="label-header md:mb-3 xl:mb-[13px] ">MENGENAL DESTINIZE</p>

      <div className="flex justify-between items-center ">
        <div className="flex justify-center space-x-1 md:space-x-2 xl:space-x-4 items-center ">
          <img
            src={WindowIcon}
            alt="windowIcon"
            className="w-[20px] md:w-[28px] xl:w-[40px] max-h-[40px]"
            loading="lazy"
          />
          <h3 className="text-[15px] min-[360px]:text-[19px]  min-[428px]:text-[25px]  md:text-[36px] xl:text-5xl sub-header-text ">
            • Galeri Pariwisata & Blog Travel
          </h3>
        </div>
        <div className="hidden lg:block">
          <a href="#" className="link flex space-x-1 xl:space-x-2 items-center">
            <span>Lihat semua</span>
            <span>
              <img
                src={ArrowIcon}
                alt="arrowIcon"
                className="w-[3px] xl:w-full"
                loading="lazy"
              />
            </span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-[10px] xl:mt-[54px]">
        <div className="order-2 md:order-1 col-span-12 md:col-span-4 justify-self-center">
          <div className="blog-card bg-white md:scale-[.85] min-[884px]:scale-100 ">
            <img
              src={BromoCover}
              alt="bromocover"
              className="w-full h-[175px] object-cover"
              loading="lazy"
            />
            <div className=" px-[25px] py-2 lg:py-5 flex flex-col space-y-1 lg:space-y-[15px] ">
              <p className="blog-card-date">22 Februari 2022</p>
              <p className="blog-card-title">
                Tips naik gunung Bromo Biar gak capek cyin 😥😛
              </p>
              <p className="blog-card-desk">
                Jadi gini gann, anda tau bromo? yaaa gunung kann!
              </p>
              <a href="#" className="blog-card-show-more">
                Baca selengkapnya ..
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2  col-span-12 md:col-span-8   px-5 lg:px-[25px] my-5 min-[884px]:my-0">
          <div className="rounded-md aspect-video w-full overflow-hidden relative hover:cursor-pointer">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
              <div className="grid place-items-center bg-[#23A6F0] rounded-full min-w-[60px] min-h-[60px] max-h-[60px] md:min-w-[75px] md:min-h-[75p] lg:min-w-[92px] lg:min-h-[92px] lg:max-h-[92px] ">
                <img src={StopIcon} alt="stop" />
              </div>
            </div>
            <img
              src={thumbVidio}
              alt="thmbmb"
              className="w-full h-full relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
