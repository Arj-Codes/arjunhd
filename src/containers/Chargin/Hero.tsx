import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import banner from "../../assets/images/chargin/chargin_banner.webp";
const Hero = () => {
  return (
    <div className="h-fit lg:h-[100vh] flex w-full section-padding lg:pt-0">
      <div className="wrapper w-full h-full flex flex-col lg:flex-row justify-around gap-24 p-8">
        <div className="left w-[95%] mx-auto lg:w-[40%] xxl:w-[45%] order-2 lg:order-1 flex flex-col justify-evenly lg:justify-around h-full gap-24">
          <div className="top flex flex-col gap-24 lg:gap-8 xxl:gap-14 justify-center">
            <div className="title font-[800] text-6xl lg:text-4xl xxl:text-6xl w-fit">
              Get{" "}
              <span className="text-chargin-green text-7xl lg:text-5xl xxl:text-7xl">
                EV chargin
              </span>{" "}
              with India's largest digital wayside amenities platform.
            </div>
            <div className="flex gap-8 text-3xl lg:text-lg xxl:text-4xl">
              <button className="buynow bg-chargin-green xxl:p-5 text-white p-8 lg:p-3 font-[500] rounded-3xl w-[15rem] lg:w-[10rem] xxl:w-fit whitespace-nowrap">
                Buy Now
              </button>
              <button className="getstarted buynow border text-chargin-green font-[500] border-chargin-green p-8 lg:p-3 xxl:p-5 rounded-3xl w-[15rem] lg:w-[10rem] xxl:w-fit whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>
          <div className="bottom flex items-center gap-5 w-full sm:justify-between xxl:justify-start">
            <div className="icons flex flex-col gap-2 lg:flex-row order-2 lg:order-1">
              <div className="icon1 p-2 rounded-full bg-black border border-chargin-green">
                <EmailIcon fontSize="large" className="text-chargin-green" />
              </div>
              <div className="icon2 p-2 rounded-full bg-black border border-chargin-green">
                <CallIcon fontSize="large" className="text-chargin-green" />
              </div>
            </div>
            <div className="text text-3xl text-[#9f9f9f] sm:text-3xl md:text-3xl lg:text-md xxl:text-4xl order-1 lg:order-2">
              <h1>Connect with our EV experts for furthur information.</h1>
            </div>
          </div>
        </div>
        <div className="right flex items-center order-1 lg:order-2 justify-center">
          <img
            src={banner}
            alt=""
            className="rounded-3xl lg:w-[40rem] xxl:w-[70rem]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
