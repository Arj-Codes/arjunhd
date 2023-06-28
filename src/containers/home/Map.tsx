import map from "../../assets/images/home/map.webp";
const Map = () => {
  return (
    <div className="flex h-fit flex-col md:flex-row gap-5 items-center justify-center md:justify-between mt-[20px] p-5">
      <div className="left order-2 md:order-1 w-[95%] md:w-[40%] xl:w-[40%] bg-[#f4f4f4] font-[900] p-3 xl:p-5 rounded-3xl flex flex-col gap-24 xxl:gap-36 justify-between xl:ml-10">
        <div className="title w-[70%]">
          <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl">
            Start the journey now! And enjoy the hassle-free highway experience.
          </h1>
        </div>
        <div className="form bg-[#ffffff] rounded-3xl p-3 xl:p-5">
          <form
            action=""
            className="flex flex-col justify-between h-full gap-10 xl:gap-24"
          >
            <div className="input flex flex-col gap-5">
              <input
                type="text"
                placeholder="From"
                className="outline-none border-none placeholder:font-[500] placeholder:text-[#cacaca] text-2xl xl:placeholder:text-xl xxl:placeholder:text-3xl"
              />
              <hr className="w-[95%] mx-auto" />
              <input
                type="text"
                placeholder="Destination"
                className="outline-none border-none placeholder:font-[500] placeholder:text-[#cacaca] xl:placeholder:text-xl xxl:placeholder:text-3xl text-2xl"
              />
            </div>
            <div className="submit flex justify-center items-center">
              <button className="md:w-[20vw] p-4 bg-[#000000] text-hd-yellow rounded-3xl text-2xl xl:text-lg xxl:text-2xl xl:p-3 hover:bg-hd-yellow hover:border hover:border-black hover:text-black transition-all ease-in duration-150">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right order-1 md:order-2 w-[90%] md:w-[50%] rounded-lg flex items-center justify-center">
        <img src={map} alt="" className="rounded-lg" loading="lazy"/>
      </div>
    </div>
  );
};

export default Map;
