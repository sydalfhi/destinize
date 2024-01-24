import CtaImage from "./../assets/images/ctaImage.png";
// import Bingung from "./../assets/images/bingung.png";

const Cta = () => {
  return (
    <>
      {/* ====== Call To Action Section Start */}
      <section className="py-20 lg:py-[120px] bg-white dark:bg-dark">
        <div className="rounded-2xl  bg-[#4372EB]  pr-8 grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex justify-center items-center flex-col p-10 gap-y-8">
            <h1
              className=" max-w-[462px] text-white text-[40px]  font-extrabold leading-[54px] "
              style={{ fontFamily: "Manrope extra" }}
            >
              Masih bingung cari tempat yang cocok?
            </h1>
            <p
              className="max-w-[444px] text-[#F1F2F6] text-base  leading-8"
              style={{ fontFamily: "Manrope" }}
            >
              Tenang, kami mempunyai fitur rekomendasi yang membantu kamu
              mencari tempat berlibur yang tepat dengan menjawab pertanyaan yang
              kami berikan.
            </p>
          </div>
          <div className="flex justify-end">
            <img src={CtaImage} alt="cta image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
