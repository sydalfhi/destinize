import { useAppContext } from "../hook/AppContext";
import { useShallow } from "zustand/react/shallow";

const Sidebar = () => {
  const [open] = useAppContext(useShallow((state) => [state.open]));

  return (
    <div
      className={`md:hidden fixed origin-top-left inset-0 z-40  overflow-y-hidden  duration-300 transition-all  ${
        open ? " -translate-x-0 " : "-translate-x-[100%]"
      }`}
    >
      <aside className="flex flex-col w-64 h-full px-5 py-8 overflow-x-hidden overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <TitleComponent />
        <div className="relative scale-75 top-5 -left-7">
          <SearchComponent />
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-3 ">
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">Home</span>
            </a>
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">List Destinasi</span>
            </a>

            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">Akun</span>
            </a>
          </nav>

          <div className="-top-5 relative">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-800 ">
                Destinasi
              </h2>
            </div>
            <nav className="mt-4 -mx-3 space-y-6 ">
              <AccordionItemSidebar
                header="Gunung"
                text="Gunung Bromo"
                color="teal"
              />
              <AccordionItemSidebar
                header="Kuliner"
                text="Soto Betawi"
                color="blue"
              />
              <AccordionItemSidebar
                header="Alam"
                text="Raja Ampat"
                color="pink"
              />
            </nav>
          </div>
          <LocationComponent />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

import { useState } from "react";
import TitleComponent from "../components/Title";
import LocationComponent from "../components/Location";
import SearchComponent from "../components/Search";

export const AccordionItemSidebar = ({ header, text, color }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className=" w-full   overflow-x-hidden  ">
      <button
        className={`faq-btn flex w-full text-center`}
        onClick={() => handleToggle()}
      >
        <div className="ml-5 flex  w-full  items-center  rounded-lg ">
          <div className="flex items-center gap-x-2  ">
            <span className={`w-2 h-2  rounded-full bg-${color}-500`} />
            <span>{header}</span>
            <div className="absolute left-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-4 h-4   rtl:rotate-180 ${
                  active ? "rotate-90" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <div className={` ${active ? "block" : "hidden"}`}>
        <p className=" py-3 px-5 text-[15px] md:text-[17px] leading-relaxed text-black/80">
          {text}
        </p>
      </div>
    </div>
  );
};
