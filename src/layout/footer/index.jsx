import LinkItem from "./LinkItem";
import DeskAndContact from "./deskAndContact";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container px-5 pb-16  mx-auto flex md:items-center lg:items-start lg:flex-row md:flex-nowrap flex-wrap flex-col md:justify-between">
          <DeskAndContact />
          <LinkItem />
        </div>
        <div>
          <div className="container mx-auto py-4 md:px-5 flex flex-wrap flex-col sm:flex-row">
            <span className="mx-auto lg:mr-0 lg:ml-auto grid grid-cols-2 place-content-center place-items-center gap-10 md:grid-cols-4">
              <a
                href=""
                className=" text-[#9A9EA6] text-sm not-italic font-normal leading-[normal] capitalize"
              >
                Tentang Kami
              </a>
              <a
                href=""
                className=" text-[#9A9EA6] text-sm not-italic font-normal leading-[normal] capitalize"
              >
                Kontak
              </a>
              <a
                href=""
                className=" text-[#9A9EA6] text-sm not-italic font-normal leading-[normal] capitalize"
              >
                Privasi & policy
              </a>
              <a
                href=""
                className=" text-[#9A9EA6] text-sm not-italic font-normal leading-[normal] capitalize"
              >
                Panduan Pengunaan
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
