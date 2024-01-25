import PantaiIcon from "../../assets/images/pantai.png";
import HeroImg from "../../assets/images/hero.png";
import playButton from "../../assets/icons/playButton.svg";
import Planeicon from "../../assets/images/plane.png";

const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="overflow-hidden">
        <div className=" mx-auto flex lg:px-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
            <p
              className="flex space-x-1 justify-center items-center text-[#4F7DF3] text-sm not-italic font-bold px-[23px] py-[9px] bg-[#E5EDFF] rounded-[39px]"
              style={{ fontFamily: "Plus Jakarta bold" }}
            >
              <span>
                <img
                  src={Planeicon}
                  alt="plane"
                  className="w-[14px]"
                  loading="lazy"
                />
              </span>
              <span> • Explore the wonderful indonesia!</span>
            </p>
            <h1
              className="text-start mt-[12px]  text-[#181E4B] text-[42px] min-[428px]:text-[48px] lg:text-[70px]  font-extrabold flex flex-col items-start -space-y-3 lg:-space-y-6 tracking-[-2.1px] lg:tracking-[-3.04px] "
              style={{ fontFamily: "Plus Jakarta extrabold" }}
            >
              <span>Liburan & nikmati</span>
              <span>
                <span className="text-[#4475F2]">tempat baru</span> di
              </span>
              <span className="flex items-center justify-start space-x-4">
                <span> indonesia ️</span>{" "}
                <img
                  src={PantaiIcon}
                  alt="pantai"
                  className="w-[50px] md:w-[70px]"
                  loading="lazy"
                />
              </span>
            </h1>
            <p
              className="text-[#5E6282] max-w-[300px] min-[428px]:max-w-[350px] lg:max-w-[450px] md:text-base font-medium leading-[30px] mt-[25px]"
              style={{ fontFamily: "Plus Jakarta medium" }}
            >
              Destinize membuat kamu selalu update terkait tempat liburan baru
              di Indonesia dengan mengikuti perkembangan para influencer di
              sosial media ✨
            </p>
            <div className="flex justify-center items-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10 mt-[34px]">
              <button className="btn-primary">Mulai sekarang →</button>
              <button className="btn-secondary flex justify-center items-center gap-x-[10px]">
                <img
                  src={playButton}
                  alt="playbutton"
                  className="w-[80px] translate-y-3"
                  loading="lazy"
                />
                <span
                  className="text-[#686D77] text-[17px] font-bold "
                  style={{ fontFamily: "Plus Jakarta bold" }}
                >
                  Putar Demo
                </span>
              </button>
            </div>
          </div>
          <div className=" lg:max-w-lg scale-125 md:scale-[1.7]  md:-translate-x-12 lg:translate-x-0 lg:scale-[1.26] lg:w-full md:w-1/3 w-5/6 top-6 relative">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HeroImg}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
