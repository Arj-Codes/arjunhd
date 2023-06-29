import sticker from "../../assets/images/rakshaqr/Rakshasticker2.webp";
import circle1 from "../../assets/images/rakshaqr/Grouptop.webp"
import circle2 from "../../assets/images/rakshaqr/Groupbottom.webp"
const Hero = () => {
  return (
    <div className="md:h-[88vh] p-3 w-full bg-[#000000] relative flex flex-col sm:flex-row justify-around items-center">
      <div className=" herofastag circle w-[8vw] xxl:w-[10vw] z-10 h-[8vw] xxl:h-[10vw] absolute top-1/3 bg-[#ffe141] rounded-full right-1/2 left-1/2"></div>
      <div className="left order-2 sm:order-1 w-[95%] mx-auto sm:w-[50%] xl:w-[30%] flex flex-col gap-8 xxl:gap-16 justify-center">
        <div className="title text-3xl xxl:text-6xl font-[700] text-white">
          <h1>Your Vehicle and Personal Emergency Care Assistant</h1>
        </div>
        <div className="content">
          <p className="text-[#909090] font-[400] xxl:text-3xl">
            RakshaQR Revolutionising safety & parking! Our innovative solution
            saves lives by ensuring prompt assistance and tackles unattended
            parking. Join us in making a difference!
          </p>
        </div>
        <div className="button">
          <button className="p-2 w-[30vw] sm:w-[20vw] xl:w-[10vw] rounded-3xl bg-hd-yellow text-black hover:text-hd-yellow hover:bg-black hover:border hover:border-hd-yellow xxl:text-3xl">
            Know More
          </button>
        </div>
      </div>
      <div className="right order-1 sm:order-2 w-[95%] mx-auto sm:w-[40%] xl:w-[35%] flex justify-center relative">
        <div className="raksha__wrapper w-[80vw] sm:w-[40vw] lg:w-[30vw] xl:w-[25vw] xxl:w-[30vw] bg-[#090909] bg-opacity-80 p-10 rounded-3xl flex items-center justify-center">
          <img src={sticker} alt="" loading="lazy" />
        </div>
        <img
          src={circle1}
          alt=""
          className="absolute top-0 left-0 sm:-left-4 md:-left-9 lg:left-3 xl:left-8 z-10 w-[5rem] sm:w-[4rem] md:w-[5rem]"
          loading="lazy"
        />
        <img
          src={circle2}
          alt=""
          className="absolute -bottom-9 sm:-bottom-5 md:-bottom-9 right-16 sm:right-10 lg:right-16 xl:right-24 z-10 w-[5rem] sm:w-[4rem] md:w-[5rem]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Hero
