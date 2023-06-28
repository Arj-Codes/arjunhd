import app_store from "../../assets/images/footer/app_store.webp";
import google_play from "../../assets/images/footer/google_play.webp";
import wallet_hand from "../../assets/images/footer/wallet_hand.webp";
import logo from "../../assets/images/header/logo2.webp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { themes } from "../styles/styles";
import { ThemeProvider } from "@mui/styles";

// import { useLocation } from "react-router-dom";

const Footer = () => {
  // const location = useLocation();

  return (
    <ThemeProvider theme={themes}>
      <div>
        <div className="footer-padding">
          <div
            className="box-content h-[620px] md:h-[200px]  
           bg-[#0C0C0C] rounded-3xl flex flex-col md:flex-row"
          >
            <div className="grow order-3 md:order-1 self-center md:self-end w-[290px] md:w-[400px] pt-3 relative">
              <div className="shadow-mobile-hand z-0"></div>
              <img
                src={wallet_hand}
                alt="mobile_preview"
                className="z-10 relative"
              />
            </div>
            <div className="grow w-auto md:w-3/5 flex flex-col order-1 md:order-2 self-center p-6">
              <div>
                <p
                  className={`text-xl md:text-base lg:text-xl`}
                  style={{ color: themes.palette.primary.main }}
                >
                  Download highway delite app
                </p>
              </div>
              <div className="py-2 pb-4">
                <p className="text-sm md:text-xs lg:text-lg text-white">
                  Find An Available Charging Station Near You With Our App
                </p>
              </div>
              <div>
                <p className="text-xs lg:text-sm text-[#B9B9B9] w-auto lg:w-5/6 text-start md:text-justify">
                  highway delite chargin EV charging mobile app to provide EV
                  owner the convince of locating charging stations on a real
                  map, getting updates on charging, recommendations on paying
                  charges online!
                </p>
              </div>
            </div>
            <div className="grow w-auto lg:w-1/5 flex flex-row md:flex-col order-2 md:order-3 self-center px-4 lg:px-0">
              <div className="pb-2 relative">
                <a
                  href="http://bit.ly/2smmpzh"
                  target="_blank"
                  aria-label="Google Play"
                >
                  <div className="shadow-goole-play z-0"></div>
                  <img
                    src={google_play}
                    alt="Google Play"
                    width="150"
                    className="z-10 relative"
                  />
                </a>
              </div>
              <div className="relative">
                <a
                  href="https://itunes.apple.com/in/app/highway-delite/id1438380461?mt=8"
                  target="_blank"
                  aria-label="App Store"
                >
                  <div className="shadow-app-store z-0"></div>
                  <img
                    src={app_store}
                    alt="App Store"
                    width="150"
                    className="z-10 relative"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="box-content h-[870px] md:h-[370px] lg:h-[270px] mt-[100px] 
          p-4 m-0 bg-[#0C0C0C] items-start"
        >
          <div className="items-center mt5 md:mt-0 sm:hidden flex">
            <div className="pr-2">
              <img
                src={logo}
                alt="mobile_preview"
                className="w-20 md:w-[60px]"
              />
            </div>
            <div>
              <p className="text-white hidden sm:flex">
                Powered by
                <span
                  className=""
                  style={{ color: themes.palette.primary.main }}
                >
                  Highway Delite
                </span>
              </p>
            </div>
          </div>
          <div className="flex-row md:flex">
            <div className="grow w-auto md:w-[350px] flex-col self-center flex md:hidden lg:flex">
              <div className="hidden sm:flex items-center mb-[30px] md:mb-[150px] mt-3 md:mt-0">
                <div className="pr-2">
                  <img
                    src={logo}
                    alt="mobile_preview"
                    className="w-20 md:w-[60px]"
                  />
                </div>
                <div>
                  <p className="text-white">
                    Powered by
                    <span
                      className=""
                      style={{ color: themes.palette.primary.main }}
                    >
                      Highway Delite
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grow w-auto lg:w-[150px] py-5 md:py-0 md:mt-[26px]">
              <div>
                <p
                  className="font-semibold text-base"
                  style={{ color: themes.palette.primary.main }}
                >
                  Quick links
                </p>
              </div>
              <div>
                <p className="text-[#B9B9B9] pt-4 py-[6px] text-sm">About us</p>
              </div>
              <div>
                <p className="text-[#B9B9B9] py-[6px] text-sm">Our services</p>
              </div>
              <div>
                <p className="text-[#B9B9B9] py-[6px] text-sm">EV Chargers</p>
              </div>
              <div>
                <p className="text-[#B9B9B9] py-[6px] text-sm">Blog</p>
              </div>
            </div>
            <div className="grow w-auto md:w-1/6 py-5 md:py-0 md:mt-[26px] md:mr-6">
              <div>
                <p
                  className="font-semibold text-base"
                  style={{ color: themes.palette.primary.main }}
                >
                  Useful links
                </p>
              </div>
              <div>
                <p className="text-[#B9B9B9] pt-4 py-[6px] text-sm">
                  Terms of services
                </p>
              </div>
              <div>
                <p className="text-[#B9B9B9] py-[6px] text-sm">
                  Privacy policy
                </p>
              </div>
              <div>
                <p className="text-[#B9B9B9] py-[6px] text-sm">
                  Cancellation policy
                </p>
              </div>
              <div>
                <p className="text-[#B9B9B9] py-[6px] text-sm">
                  Guidelines and policies
                </p>
              </div>
            </div>
            <div className="grow w-auto py-5 md:py-0 md:mt-[26px]">
              <div>
                <p
                  className="font-semibold text-base"
                  style={{ color: themes.palette.primary.main }}
                >
                  Contact Us
                </p>
              </div>
              <div className="pt-4 py-3 text-sm mt-[5px] md:mt-0">
                <p className="text-[#B9B9B9]">highway delite</p>
                <p className="text-[#B9B9B9]">
                  Param People Infotech Solutions Pvt Ltd
                </p>
                <p className="text-[#B9B9B9]">
                  Keonics k-wings/Nasscom 10,000 start-up warehouse
                </p>
                <p className="text-[#B9B9B9]">
                  27th Main Rd, 1st sector, 2nd Floor,
                </p>
                <p className="text-[#B9B9B9]">
                  HSR Layout (behind HSR Police Station),
                </p>
                <p className="text-[#B9B9B9]">Bengaluru - 560102</p>
              </div>
              <div>
                <p className="text-[#B9B9B9]">
                  <span
                    className="font-medium"
                    style={{ color: themes.palette.primary.main }}
                  >
                    Ph
                  </span>{" "}
                  - 9986844448
                </p>
              </div>
            </div>
          </div>
          <div className="items-center flex w-[98%] mx-auto justify-between">
            <div className="flex items-center">
              <InstagramIcon
                fontSize="large"
                style={{ color: themes.palette.primary.main }}
              />
              <FacebookIcon
                fontSize="large"
                style={{ color: themes.palette.primary.main }}
              />
              <TwitterIcon
                fontSize="large"
                style={{ color: themes.palette.primary.main }}
              />
              <div>
                <p className="text-white mx-3">highway delite</p>
              </div>
            </div>

            <div className="textus text-white flex items-center gap-3 font-bold">
              <h1>Text Us</h1>
              <WhatsAppIcon
                fontSize="large"
                style={{ color: themes.palette.primary.main }}
              />
            </div>
          </div>
        </div>

        <div className="py-5">
          <p className="text-xs md:text-base text-center text-[#8B8B8B]">
            All the copyrights are reserved to @highway delite - 2023
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
