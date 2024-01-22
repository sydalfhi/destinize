import Company from "./layout/Company";
import FavoriteDestination from "./layout/FavoriteDestination";
import FindPlace from "./layout/FindPlace";
import Gallery from "./layout/Gallery";
import OnlineReservaced from "./layout/OnlineReservaced";

import "./assets/css/components.css";
import "./assets/css/anim.css";
import "./assets/css/swiper.css";
import Testimonial from "./layout/testimonial/";

function App() {
  return (
    <>
      <main>
        {/* navbar */}
        {/* hero section */}
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
        {/* cta*/}
        {/* footer*/}
      </main>
    </>
  );
}

export default App;
