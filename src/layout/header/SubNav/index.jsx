import { useState } from "react";

const SubNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-3">
        <div
          className="relative inline-block "
          onClick={() => setOpen((open) => !open)}
        >
          <button className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white  rounded-md  ">
            <span className="mx-1">Gunung</span>
            <svg
              className={`w-5 h-5 mx-1 transition-all duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          {open && (
            <div className="absolute left-3 z-20 w-56  overflow-hidden  bg-white flex flex-col space-y-2">
              <a href="#" className="  text-sm text-gray-600 capitalize ">
                gunung bromo
              </a>
              <a href="#" className=" text-sm text-gray-600 capitalize ">
                gunung rinjani
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SubNav;
