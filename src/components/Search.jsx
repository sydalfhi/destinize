import SearchIcon from "../assets/icons/search.svg";

const SearchComponent = () => {
  return (
    <>
      <input
        type="search"
        placeholder="Cari apapun disini..."
        className=" relative w-[300px] md:w-[450px] rounded-[30px] bg-[#f0f1f2] flex h-12 items-center gap-2.5 flex-[1_0_0] pl-[50px] placeholder:text-[#9A9EA6]  text-xs  leading-[normal]"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      />
      <img
        src={SearchIcon}
        alt="SearchIcon"
        className="left-5 top-1/2 -translate-y-1/2 absolute"
      />
    </>
  );
};

export default SearchComponent;
