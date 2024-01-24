import CtaImage from "./../assets/images/ctaImage.png";
// import Bingung from "./../assets/images/bingung.png";

const Cta = () => {
  return (
    <>
      {/* ====== Call To Action Section Start */}
      <section className="py-20 lg:py-[120px] bg-white dark:bg-dark">
        <div className="rounded-2xl  bg-[#4372EB]  lg:pr-8 grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex justify-center items-center flex-col p-5 lg:p-10 gap-y-5 lg:gap-y-8">
            <h1
              className=" lg:max-w-[462px] text-white text-[26px] lg:text-[40px]  font-extrabold lg:leading-[54px] "
              style={{ fontFamily: "Manrope extra" }}
            >
              Masih bingung cari tempat yang cocok?
            </h1>
            <p
              className="lg:max-w-[444px] text-[#F1F2F6] text-[15px] lg:text-base  leading-6 lg:leading-8"
              style={{ fontFamily: "Manrope" }}
            >
              Tenang, kami mempunyai fitur rekomendasi yang membantu kamu
              mencari tempat berlibur yang tepat dengan menjawab pertanyaan yang
              kami berikan.
            </p>
          </div>
          <div className="flex  lg:justify-end">
            <img src={CtaImage} alt="cta image" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
