import { useState } from "react";

const SubNav = () => {
  const [ref_1, setRef1] = useState(false);
  const [ref_2, setRef2] = useState(false);
  const [ref_3, setRef3] = useState(false);
  const [ref_4, setRef4] = useState(false);
  const [ref_5, setRef5] = useState(false);

  const data = [
    {
      id: 1,
      reference: ref_1,
      setreference: setRef1,
      label: "gunung",
      text1: "gunung bromo",
      text2: "gunung rinjani",
    },
    {
      id: 2,
      reference: ref_2,
      setreference: setRef2,
      label: "pantai",
      text1: "pantai lombol",
      text2: "pantai bali",
    },
    {
      id: 3,
      reference: ref_3,
      setreference: setRef3,
      label: "bukit",
      text1: "bukit nabaru",
      text2: "bukit barisan",
    },
    {
      id: 4,
      reference: ref_4,
      setreference: setRef4,
      label: "kuliner",
      text1: "kulinar pedas",
      text2: "kuliner asin",
    },
    {
      id: 5,
      reference: ref_5,
      setreference: setRef5,
      label: "kuliner",
      text1: "kulinar pedas",
      text2: "kuliner asin",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 mt-2">
        <div className="mt-3 md:grid grid-cols-5 place-items-center gap-x-9 py-5 hidden col-span-10">
          {data.map((item) => (
            <div key={item.id} className="relative inline-block ">
              <button className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white  rounded-md  ">
                <span className="mx-1 capitalize">{item.label}</span>
                <svg
                  className={`w-5 h-5 mx-1 transition-all duration-300 rotate-0`}
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
            </div>
          ))}
        </div>
        <div className="py-1 min-w-[170px] bg-red-600 col-span-2"></div>
      </div>
    </>
  );
};

export default SubNav;
