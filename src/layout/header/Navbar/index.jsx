import Sidebar from "../../Sidebar";
import MenuIcon from "../../../assets/icons/menu.svg";
import GlobalIcon from "../../../assets/icons/global.svg";
import { useShallow } from "zustand/react/shallow";
import { useAppContext } from "../../../hook/AppContext";
import TitleComponent from "../../../components/Title";
import LocationComponent from "../../../components/Location";
import SearchComponent from "../../../components/Search";

const Navbar = () => {
  const [setSidebar] = useAppContext(useShallow((state) => [state.setSidebar]));
  return (
    <>
      <header className="relative overflow-x-hidden ">
        <section className="flex justify-between   relative w-full min-h-[50px] mt-[20px]">
          <TitleComponent />

          <div className="relative hidden md:block">
            <SearchComponent />
          </div>

          <div className=" bg-[#E3EBFD] px-5 rounded-md space-x-1 items-center hidden md:flex">
            <label className="flex space-x-3 ">
              <img src={GlobalIcon} alt="global" />
              <select
                className="   px-1 appearance-none focus:border-none focus:ring-0 cursor-pointer "
                style={{ background: "transparent" }}
              >
                <option selected value="indonesia">
                  Bahasa Indonesia
                </option>
              </select>
            </label>
          </div>

          <div className="hidden md:block">
            <LocationComponent />
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
