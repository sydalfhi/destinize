import Sidebar from "./Sidebar";
import MainIcon from "./../assets/images/mainIcon.png";
import MenuIcon from "./../assets/icons/menu.svg";

const Navbar = () => {
  return (
    <>
      <header className="relative">
        <Sidebar />
        <section className="flex  bg-red-100 relative w-full min-h-[50px] z-30 justify-between">
          <div className="flex justify-start items-center space-x-2">
            <img src={MainIcon} alt="main icon" className="w-7 max-h-7" />
            <h1
              className="relative z-30 text-black text-lg  font-bold leading-[normal]"
              style={{ fontFamily: "Plus Jakarta bold" }}
            >
              Destinize
            </h1>
          </div>
          <button>
            <img src={MenuIcon} alt="menu" />
          </button>
        </section>
      </header>
    </>
  );
};

export default Navbar;
