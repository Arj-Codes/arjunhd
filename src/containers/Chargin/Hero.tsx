import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import banner from "../../assets/images/chargin/chargin_banner.png";
const Hero = () => {
  return (
    <div className="h-fit lg:h-[100vh] flex section-padding w-full pt-3 lg:pt-0">
      <div className="wrapper w-full h-full flex flex-col lg:flex-row justify-around gap-5">
        <div className="left lg:w-[35%] order-2 lg:order-1 flex flex-col justify-evenly lg:justify-around h-full gap-4">
          <div className="top flex flex-col gap-5">
            <div className="title font-[800] text-3xl xxl:text-5xl">
              Get{" "}
              <span className="text-chargin-green text-4xl xxl:text-6xl">EV chargin</span>{" "}
              with India's largest digital wayside amenities platform.
            </div>
            <div className="buttons flex gap-3 xxl:text-3xl ">
              <button className="p-3 w-[8rem] xxl:w-[15rem] rounded-lg bg-chargin-green text-white">
                Buy Now
              </button>
              <button className="p-3 w-[8rem] xxl:w-[15rem] rounded-lg bg-white text-chargin-green border border-chargin-green whitespace-nowrap">
                Get started
              </button>
            </div>
          </div>
          <div className="bottom flex items-center gap-5 w-full sm:justify-between xxl:justify-start">
            <div className="icons flex flex-col gap-2 lg:flex-row order-2 lg:order-1">
              <div className="icon1 p-2 rounded-full bg-black border border-chargin-green">
                <EmailIcon fontSize="medium" className="text-chargin-green" />
              </div>
              <div className="icon2 p-2 rounded-full bg-black border border-chargin-green">
                <CallIcon fontSize="medium" className="text-chargin-green" />
              </div>
            </div>
            <div className="text text-sm text-[#9f9f9f] sm:text-lg lg:text-md xxl:text-xl order-1 lg:order-2">
              <h1>Connect with our EV experts for furthur information.</h1>
            </div>
          </div>
        </div>
        <div className="right flex items-center order-1 lg:order-2 justify-center">
          <img src={banner} alt="" className="rounded-3xl w-[35rem] xxl:w-[60rem]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
