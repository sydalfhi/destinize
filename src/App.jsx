import Company from "./layout/Company";
import FavoriteDestination from "./layout/FavoriteDestination";
import FindPlace from "./layout/FindPlace";
import Gallery from "./layout/Gallery";
import OnlineReservaced from "./layout/OnlineReservaced";

import "./assets/css/components.css";
import "./assets/css/anim.css";
import "./assets/css/swiper.css";
import Testimonial from "./layout/testimonial/";
import Faq from "./layout/faq";
import Hero from "./layout/Hero";
import Navbar from "./layout/header/Navbar";
import Cta from "./layout/Cta";
import Footer from "./layout/footer/";
import SubNav from "./layout/header/SubNav";

function App() {
  return (
    <>
      <main>
        {/* navbar */}
        <Navbar />
        {/* hero section */}
        <SubNav />
        <Hero />
        {/* colaboration*/}
        <Company />
        {/* destinasi favorit*/}
        <FavoriteDestination />
        {/* reservasi*/}
        <OnlineReservaced />
        {/* tempat wisata*/}
        <FindPlace />
        {/* galery*/}
        <Gallery />
        {/* testimony*/}
        <Testimonial />
        {/* faq*/}
        <Faq />
        {/* cta*/}
        <Cta />
        {/* footer*/}
        <Footer />
      </main>
    </>
  );
}

export default App;
