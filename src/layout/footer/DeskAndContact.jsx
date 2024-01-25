import mainIcon from "../../assets/images/mainIcon.png";
import PhoneIcon from "../../assets/icons/phone.svg";
import EmailIcon from "../../assets/icons/email.svg";
import Addrescon from "../../assets/icons/address.svg";
import PrinterIcon from "../../assets/icons/printer.svg";
const DeskAndContact = () => {
  const data = [
    {
      id: 1,
      icon: PhoneIcon,
      text: "0838-3865-5611",
    },
    {
      id: 2,
      icon: EmailIcon,
      text: "akulaku2509@gmail.com",
    },
    {
      id: 3,
      icon: Addrescon,
      text: "Padang Panjang",
    },
    {
      id: 4,
      icon: PrinterIcon,
      text: "000-000-000",
    },
  ];

  return (
    <>
      <div className="max-w-[455px] flex-grow-0   md:mx-0 mx-auto  text-left">
        <a className="flex flex-col title-font font-medium items-start md:justify-start justify-center text-gray-900">
          <img src={mainIcon} alt="main icon" loading="lazy" />
          <span
            className="text-black text-2xl font-bold my-4"
            style={{ fontFamily: "Plus Jakarta bold" }}
          >
            Destinize
          </span>
        </a>
        <p
          className="  text-[#9A9EA6] text-sm not-italic font-normal leading-6"
          style={{ fontFamily: "Plus Jakarta normal" }}
        >
          Destinize adalah website atau layanan aplikasi yang membantu kamu
          memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’ agar
          lebih dikenal dan ramai
          <a
            href=""
            className="text-[#4475F2] text-sm not-italic font-bold mx-1"
            style={{ fontFamily: "Plus Jakarta bold" }}
          >
            {"  "}
            Baca Selengkapnya
          </a>
        </p>

        <div className="mt-8">
          <ul className="list-none flex flex-col gap-y-[20px]">
            {data.map((item) => (
              <li key={item.id}>
                <span className="flex space-x-3 justify-start items-center">
                  <img src={item.icon} alt={item.text} width={20} />
                  <span
                    className=" text-[#9A9EA6] text-center text-sm not-italic font-normal leading-[normal]"
                    style={{ fontFamily: "Plus Jakarta normal" }}
                  >
                    {item.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DeskAndContact;
