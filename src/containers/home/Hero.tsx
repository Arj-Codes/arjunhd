
const Hero = () => {
  return (
    <div
      className="section-padding flex flex-col h-[100vh] bg-cover bg-center bg-no-repeat justify-center text-start md:text-center px-[150px] xl:w-full xxl:gap-8"
      id="herohome"
    >
      <div className="sm:text-center md:text-start">
        <p className="text-white font-semibold text-center text-4xl sm:text-3xl lg:text-3xl xxl:text-5xl my-3">
          India's largest digitally connected <br></br>mobility and highway
          wayside amenities platform.
        </p>
      </div>
      <div>
        <p className="text-[#909090] mb-1 lg:text-md xxl:text-3xl text:xl sm:text-lg text-center xxl:w-[80%] mx-auto">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="text-[#000000] p-3 bg-hd-yellow rounded-3xl xl:w-1/6 lg:w-1/4 w-[1/2] my-5 hover:bg-black hover:text-hd-yellow hover:border hover:border-hd-yellow transition-all ease-linear duration-200 text-md xxl:text-2xl">
          Get Started
        </button>
      </div>
      <div className="circle rounded-full w-[4vw] h-[4vw] bg-hd-yellow absolute lg:bottom-1/4 md:bottom-36 bottom-32 md:left-1/4 left-1/3 xs:flex hidden"></div>

      <div className="box-content mt-[81px] lg:w-[70%] w-fit mx-auto home-nav-bg flex gap-10 whitespace-nowrap lg:gap-0 items-center justify-between rounded-2xl p-[40px] border border-[#6B6B6B] text-[#D7D7D7] xxl:text-3xl">
        <div>
          <p>Fastag</p>
        </div>
        <div>
          <p>RakshaQR</p>
        </div>
        <div>
          <p>EV Chargin</p>
        </div>
        <div>
          <p>GPS</p>
        </div>
        <div>
          <p>Insurance</p>
        </div>
      </div>
    </div>
  );
}

export default Hero
