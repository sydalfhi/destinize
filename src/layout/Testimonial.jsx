import MapIcon from "../assets/images/map.png";
const Testimonial = () => {
  return (
    <section className="mt-[100px] xl:mt-[140px] pb-96">
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
      <p className="paragrafh-header-text max-w-[820px] mx-auto mt-2 xl:mt-[18px]">
        Penasaran apa saja review dari pengguna yang memakai aplikasi dan
        website Destinize buat nentuin kemana liburan mereka selanjutnya? Yuk
        cek dibawah!
      </p>
    </section>
  );
};

export default Testimonial;
