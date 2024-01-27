import { useState } from "react";

const SubNav = () => {
  const [open, setOpen] = useState(false);

  const data = [
    {
      id: 1,
      label: "gunung",
      text1: "gunung bromo",
      text2: "gunung rinjani",
    },
    {
      id: 2,
      label: "pantai",
      text1: "pantai lombol",
      text2: "pantai bali",
    },
    {
      id: 3,
      label: "bukit",
      text1: "bukit nabaru",
      text2: "bukit barisan",
    },
  ];
  return (
    <>
      <div className="mt-3 grid grid-cols-5 place-items-center gap-x-9">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative inline-block "
            onClick={() => setOpen((open) => !open)}
          >
            <button className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white  rounded-md  ">
              <span className="mx-1 capitalize">{item.label}</span>
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
              <div className="absolute left-2.5 z-20 w-56  overflow-hidden  bg-white flex flex-col space-y-2">
                <a href="#" className="  text-sm text-gray-600 capitalize ">
                  {item.text1}
                </a>
                <a href="#" className=" text-sm text-gray-600 capitalize ">
                  {item.text2}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SubNav;
