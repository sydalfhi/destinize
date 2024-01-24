import CompanyAxon from "../assets/images/axon.png";
import CompanyJestar from "../assets/images/jestar.png";
import CompanyExpedia from "../assets/images/expedia.png";
import CompanyLitalia from "../assets/images/litaia.png";

import CompanyAltruvia from "../assets/images/altruvia.png";
import CompanyPolaris from "../assets/images/polaris.png";
import CompanySmift from "../assets/images/smift.png";
import CompanyQantas from "../assets/images/qantas.png";

const Company = () => {
  const listCompany = [
    {
      id: 1,
      poster: CompanyAxon,
    },
    {
      id: 2,
      poster: CompanyJestar,
    },
    {
      id: 3,
      poster: CompanyExpedia,
    },
    {
      id: 4,
      poster: CompanyLitalia,
    },
    {
      id: 5,
      poster: CompanyAltruvia,
    },
    {
      id: 6,
      poster: CompanyPolaris,
    },
    {
      id: 7,
      poster: CompanySmift,
    },
    {
      id: 8,
      poster: CompanyQantas,
    },
  ];

  return (
    <>
      <section className="mt-[20px] md:my-20  ">
        <div className="slider">
          <div className="slide-track">
            {listCompany.map((item) => (
              <div
                className=" pr-10 slide min-w-[190px] aspect-video grid place-items-center  transition-shadow duration-300  "
                key={item.id}
              >
                <img
                  src={item.poster}
                  alt="logo company"
                  className="object-cover w-[190px] "
                  loading="lazy"
                />
              </div>
            ))}
            {listCompany.map((item) => (
              <div
                className="pr-10 slide min-w-[190px] aspect-video grid place-items-center  "
                key={item.id}
              >
                <img
                  src={item.poster}
                  alt="logo company"
                  className="object-cover w-[190px] "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="flex flex-nowrap justify-between">
        {listCompany.map((item) => (
          <div
            className="min-w-[190px] aspect-video grid place-items-center  transition-shadow duration-300  hover:shadow-[0px_1.852px_3.148px_0px_rgba(0,0,0,0.00),0px_8.148px_6.519px_0px_rgba(0,0,0,0.01),0px_20px_13px_0px_rgba(0,0,0,0.01),0px_38.519px_25.481px_0px_rgba(0,0,0,0.01),0px_64.815px_46.852px_0px_rgba(0,0,0,0.02),0px_100px_80px_0px_rgba(0,0,0,0.02)] rounded-[10px] bg-white"
            key={item.id}
          >
            <img
              src={item.poster}
              alt="logo company"
              className="object-cover w-[100px] "
              loading="lazy"
            />
          </div>
          ))}
        </div> */}
    </>
  );
};

export default Company;
