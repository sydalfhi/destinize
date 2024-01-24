const LinkItem = () => {
  const titleStyle = "text-black text-lg font-bold capitalize";
  const listStyle = "text-[#9A9EA6] text-sm capitalize font-normal";
  return (
    <div className="   flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-10 mt-10 md:text-left text-center">
      {/* link */}
      <div className="lg:w-1/3 md:w-1/3 w-full px-4">
        <h2 className={titleStyle} style={{ fontFamily: "Plus Jakarta bold" }}>
          Tentang
        </h2>
        <nav className="list-none flex flex-col gap-y-[20px] mt-6">
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Karir
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Pekerjaan
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Berita
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Galeri
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Afiliasi
            </a>
          </li>
        </nav>
      </div>
      {/* link */}
      <div className="lg:w-1/3 md:w-1/3 w-full px-4 my-16 md:my-0">
        <h2 className={titleStyle} style={{ fontFamily: "Plus Jakarta bold" }}>
          Support
        </h2>
        <nav className="list-none flex flex-col gap-y-[20px] mt-6">
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Kontak Kami
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Online Chat
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Whatsapp
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Tiket
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Call Center
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Bantuan
            </a>
          </li>
        </nav>
      </div>
      {/* link */}
      <div className="lg:w-1/3 md:w-1/3 w-full px-4">
        <h2 className={titleStyle} style={{ fontFamily: "Plus Jakarta bold" }}>
          FAQ
        </h2>
        <nav className="list-none flex flex-col gap-y-[20px] mt-6">
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Akun
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Organisir
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Order
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Pembayaran
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Pengembalian
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Copyright
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Plus Jakarta normal" }}
              className={listStyle}
            >
              Bahasa
            </a>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default LinkItem;
