import { Fragment } from "react";
import BingungIcon from "./../../assets/images/bingung.png";
import { AccordionItem } from "./AccordionItem";
import { faqContent } from "./faqContent";
const Faq = () => {
  const data = faqContent();

  return (
    <>
      <section className="mt-[100px] overflow-hidden ">
        <p className="label-header md:mb-3 xl:mb-[13px]">FREQUENTLY ASKED </p>

        <div className="flex justify-between items-center ">
          <div className="flex space-x-1 md:space-x-2 xl:space-x-4 items-center ">
            <img
              src={BingungIcon}
              alt="Bingung_Icon"
              className="w-[12px] min-[360px]:w-[20px] md:w-[28px] xl:w-[40px] max-h-[40px]"
            />
            <h3 className="sub-header-text min-[360px]:text-[18px] min-[428px]:text-[24px] md:text-[36px] xl:text-5xl ">
              • Pertanyaan yang Sering Diajukan
            </h3>
          </div>
        </div>

        <div className="container mx-auto mt-[30px] md:mt-[80px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 ">
              {data.map((item) => (
                <Fragment key={item.id}>
                  <AccordionItem header={item.tanya} text={item.jawab} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
