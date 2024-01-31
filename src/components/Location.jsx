import LocationNow from "../assets/icons/locationNow.svg";

const LocationComponent = () => {
  return (
    <>
      <div className=" w-[258px] h-[48px] flex items-center gap-3">
        <div className="bg-[#E3EBFD] rounded-full grid place-items-center w-[48px] aspect-square bg-[]">
          <img src={LocationNow} alt="location" />
        </div>
        <div>
          <p
            className="text-[#9A9EA6] text-xs "
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Lokasi
          </p>
          <h1
            className="text-[#4475F2]  text-sm md:text-base font-bold "
            style={{ fontFamily: "Plus Jakarta bold" }}
          >
            Indonesia, Yogyakarta
          </h1>
        </div>
      </div>
    </>
  );
};

export default LocationComponent;
