import WindowIcon from "../assets/images/window.png";
import BromoCover from "../assets/images/bromo_cover.png";
import BannerBlog from "../assets/images/bannerBlog.jpg";

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
          />
          <h3 className="sub-header-text min-[428px]:text-[25px]  md:text-[36px] xl:text-5xl ">
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
              className="w-full h-[125px] object-cover"
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
          <div className="bg-orange-400 rounded-md aspect-video w-full"></div>
        </div>
      </div>

      <div className=" mt-[37px] w-full   max-h-[208px] relative pr-[25px] overflow-hidden">
        <img src={BannerBlog} alt="" className="relative z-0 w-full" />
        <div className="blog-card-banner">
          <h1 className="blog-card-banner-title">
            Tips meminum air kawah biar lidah melepuh 😁
          </h1>
          <p className="blog-card-banner-desk">
            Lidah melepuh? why nott, kawah bukan untuk dilihat kawan.. tapi
            untuk di minum.. rasakan kepanasan yang brutal 🔥
          </p>

          <div className="flex space-x-10">
            <a className="blog-card-banner-link" href="#">
              Goggle
            </a>
            <a className="blog-card-banner-link" href="#">
              Trending
            </a>
            <a className="blog-card-banner-link" href="#">
              Baru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
