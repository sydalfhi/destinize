import WindowIcon from "../assets/images/window.png";
import BromoCover from "../assets/images/bromo_cover.png";
import BannerBlog from "../assets/images/bannerBlog.jpg";

import ArrowIcon from "../assets/icons/arrow.svg";
const Gallery = () => {
  return (
    <section className="mt-[60px] xl:mt-[170px] ">
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
        <div>
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

      <div className="grid grid-cols-12 xl:mt-[54px]">
        <div className="col-span-12 xl:col-span-3 justify-self-center">
          <div className="blog-card ">
            <img src={BromoCover} alt="bromocover" />
            <div className=" px-[25px] py-5 flex flex-col space-y-[15px] ">
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

        <div className="col-span-12 xl:col-span-9   px-[25px] my-5 lg:my-0">
          <div className="bg-orange-400 rounded-md aspect-video w-full"></div>
        </div>
      </div>

      <div className="xl:mt-[37px] w-full   h-[208px] relative pr-[25px]">
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
