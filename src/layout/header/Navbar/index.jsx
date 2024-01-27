import Sidebar from "../../Sidebar";
import MainIcon from "../../../assets/images/mainIcon.png";
import MenuIcon from "../../../assets/icons/menu.svg";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {});
  return (
    <>
      <header className="relative">
        <Sidebar />
        <section className="flex relative w-full min-h-[50px] z-30 justify-between">
          <div className="flex justify-start items-center space-x-2">
            <img src={MainIcon} alt="main icon" className="w-7 max-h-7 " />

            <h1
              className="relative z-30 text-black text-lg  font-bold leading-[normal]"
              style={{ fontFamily: "Plus Jakarta bold" }}
            >
              Destinize
            </h1>
          </div>
          <div className="">
            <div>
              <img src="" alt="" />
              <select className="all-unset">
                <option selected value="indonesia">
                  Bahasa Indonesia
                </option>
              </select>
            </div>
            <div></div>
          </div>
          <button className="md:hidden">
            <img src={MenuIcon} alt="menu" />
          </button>
        </section>
      </header>
    </>
  );
};

export default Navbar;
