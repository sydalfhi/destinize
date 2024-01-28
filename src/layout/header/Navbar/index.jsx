import Sidebar from "../../Sidebar";
import MainIcon from "../../../assets/images/mainIcon.png";
import MenuIcon from "../../../assets/icons/menu.svg";
import GlobalIcon from "../../../assets/icons/global.svg";
import LocationNow from "../../../assets/icons/locationNow.svg";
import SearchIcon from "../../../assets/icons/search.svg";
import { useShallow } from "zustand/react/shallow";
import { useAppContext } from "../../../hook/AppContext";

const Navbar = () => {
  const [setSidebar] = useAppContext(useShallow((state) => [state.setSidebar]));
  return (
    <>
      <header className="relative ">
        <Sidebar />
        <section className="flex justify-between   relative w-full min-h-[50px] mt-[20px]">
          <div className="flex justify-start items-center space-x-2 ">
            <img src={MainIcon} alt="main icon" className="w-7 max-h-7 " />

            <h1
              className="relative z-30 text-black text-lg  font-bold leading-[normal]"
              style={{ fontFamily: "Plus Jakarta bold" }}
            >
              Destinize
            </h1>
          </div>

          <div className="relative hidden md:block">
            <input
              type="search"
              placeholder="Cari apapun disini..."
              className=" relative w-[450px] rounded-[30px] bg-[#f0f1f2] flex h-12 items-center gap-2.5 flex-[1_0_0] pl-[50px] placeholder:text-[#9A9EA6]  text-xs  leading-[normal]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            />
            <img
              src={SearchIcon}
              alt="SearchIcon"
              className="left-5 top-1/2 -translate-y-1/2 absolute"
            />
          </div>

          <div className=" space-x-1 items-center hidden md:flex">
            <img src={GlobalIcon} alt="global" />
            <select className="  px-1 appearance-none focus:border-none focus:ring-0 cursor-pointer">
              <option selected value="indonesia">
                Bahasa Indonesia
              </option>
            </select>
          </div>

          <div className=" w-[258px] h-[48px] hidden md:flex items-center gap-3">
            <div className="bg-[#E3EBFD] rounded-full grid place-items-center w-[48px] aspect-square bg-[]">
              <img src={LocationNow} alt="location" />
            </div>
            <div>
              <p
                className="text-[#9A9EA6] text-xs "
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Lokasi
              </p>
              <h1
                className="text-[#4475F2] text-base font-bold "
                style={{ fontFamily: "Plus Jakarta bold" }}
              >
                Indonesia, Yogyakarta
              </h1>
            </div>
          </div>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-50  md:hidden"
            onClick={setSidebar}
          >
            <img src={MenuIcon} alt="menu" />
          </button>
        </section>
      </header>
    </>
  );
};

export default Navbar;
