import AnjayIcon from "../assets/images/anjay.png";
import CariIcon from "../assets/images/cari.png";
import IsiIcon from "../assets/images/isi.png";
import SukaIcon from "../assets/images/suka.png";

import Dummy1 from "../assets/images/dummy1.png";

const OnlineReservaced = () => {
  const listData = [
    {
      iconImage: CariIcon,
      text: "Cari tempat yang kamu mau",
      subtext:
        "Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize",
    },
    {
      iconImage: IsiIcon,
      text: "Isi data dan konfirmasi pembayaran",
      subtext: "Tulis dan lengkapi data kamu untuk keperluan data booking",
    },
    {
      iconImage: SukaIcon,
      text: "Tinggal masuk dan enjoy!",
      subtext: "Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan",
    },
  ];

  return (
    <section className="mt-[80px] xl:mt-[146px]  grid grid-cols-1 lg:grid-cols-2 ">
      <div>
        <p className="label-header  md:mb-3 xl:mb-[13px]">RESERVASI TEMPAT</p>

        <div className="flex justify-between items-center -mt-2">
          <div className="flex space-x-1 md:space-x-2 xl:space-x-4 items-center ">
            <h3 className="sub-header-text max-w-[540px] relative ">
              <p className=" relative z-0 leading-[60px] min-[360px]:text-[20px] min-[428px]:text-[25px]  md:text-[36px] xl:text-5xl ">
                Gak mau ngantri? reservasi aja!
              </p>
              <span className="hidden md:inline absolute  top-14 right-5  xl:right-32 -translate-x-10  z-20 min-w-11">
                <img
                  src={AnjayIcon}
                  alt="planeIcon"
                  className="w-[50px] md:w-[30px] aspect-scale xl:w-[50px] max-h-[50px]"
                />
              </span>
            </h3>
          </div>
        </div>

        <div className="min-[360px]:mt-[10px] xl:mt-[33px] grid gap-y-8 ">
          {listData.map((item, index) => (
            <div className="list" key={index}>
              <div className="list-type">
                <img src={item.iconImage} alt="icon" />
              </div>
              <div>
                <h5 className="list-title">{item.text}</h5>
                <p className="list-desk">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 xl:mt-10">
        <img src={Dummy1} alt="dummy" className="relative z-50 scale-125" />
        <div className="absolute z-10 top-0 right-10 xl:right-28   w-[150px] xl:w-[40vh] aspect-square opacity-60 blur-[75px] rounded-full bg-[#4475f2]"></div>
      </div>
    </section>
  );
};

export default OnlineReservaced;
