import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import fastag_logo from "../../assets/images/home/fastag_logo.webp";
import fastag_logo_faded from "../../assets/images/home/fastag_logo_faded.webp";
import fastag_full from "../../assets/images/home/fastag_full.webp";
import rakshaqr_logo from "../../assets/images/home/rakshaqr_logo.webp";
import rakshaqr_logo_faded from "../../assets/images/home/rakshaqr_logo_faded.webp";
import rakshaqr_full from "../../assets/images/home/rakshaqr_full.webp";
import gps_logo from "../../assets/images/home/gps_logo.webp";
import gps_logo_faded from "../../assets/images/home/gps_logo_faded.webp";
import gps_full from "../../assets/images/home/gps_full.webp";
import chargin_logo from "../../assets/images/home/chargin_logo.webp";
import chargin_logo_faded from "../../assets/images/home/chargin_logo_faded.webp";
import chargin_full from "../../assets/images/home/chargin_full.webp";
import { useEffect,useState } from "react";
const Products = () => {
    const [tabs] = useState<Array<string>>([
      "FASTag",
      "RakshaQR",
      "GPS",
      "EV Chargin",
    ]);
    const [tab, setTab] = useState("FASTag");
      useEffect(() => {
        const interval = setInterval(() => {
          const currentIndex = tabs.indexOf(tab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          const nextTab = tabs[nextIndex];
          setTab(nextTab);
        }, 5000);

        return () => clearInterval(interval);
      }, [tabs, tab]);
      const handleClick = (e: number) => {
        const nextTab = tabs[e];
        setTab(nextTab);
      };
    interface productitemsProp {
      id: number;
      text: string;
      img: string;
      fimg: string;
      desc: string;
      fullimg: string;
    }
    const productitems: productitemsProp[] = [
      {
        id: 1,
        text: "FASTag",
        img: fastag_logo,
        fimg: fastag_logo_faded,
        desc: "Buy FASTag from Highway Delite for hassle free highway toll payments",
        fullimg: fastag_full,
      },
      {
        id: 2,
        text: "RakshaQR",
        img: rakshaqr_logo,
        fimg: rakshaqr_logo_faded,
        desc: "Buy FASTag from Highway Delite for hassle free highway toll payments",
        fullimg: rakshaqr_full,
      },
      {
        id: 3,
        text: "GPS",
        img: gps_logo,
        fimg: gps_logo_faded,
        desc: "Buy FASTag from Highway Delite for hassle free highway toll payments",
        fullimg: gps_full,
      },
      {
        id: 4,
        text: "EV Chargin",
        img: chargin_logo,
        fimg: chargin_logo_faded,
        desc: "Buy FASTag from Highway Delite for hassle free highway toll payments",
        fullimg: chargin_full,
      },
    ];
  return (
    <div>
      <div className="section-padding">
        <p className="text-4xl xxl:text-6xl font-bold">
          Our
          <span className="text-hd-yellow"> Products</span>
        </p>
      </div>

      <div className="flex">
        <div className="product__Wrapper w-[92%] xl:w-[80%] mx-auto flex flex-col md:flex-row justify-between p-5 rounded-3xl bg-[#f4f4f4] gap-8">
          <div className="left w-[95%] md:w-[10%] flex flex-row justify-between md:flex-col gap-5">
            {productitems.map((p) => (
              <div
                className="eachitem flex flex-col gap-2 cursor-pointer"
                onClick={() => {
                  handleClick(p.id - 1);
                }}
              >
                <div className="img mx-auto flex justify-center items-center bg-white rounded-full w-[6rem] h-[6rem]">
                  {tab === p.text ? (
                    <img
                      src={p.img}
                      alt=""
                      className="w-fit h-fit"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={p.fimg}
                      alt=""
                      className="w-fit h-fit"
                      loading="lazy"
                    />
                  )}
                </div>
                <div
                  className={`title flex whitespace-nowrap justify-center items-center ${
                    tab === p.text ? "font-[700]" : "font-[300]"
                  }`}
                >
                  {p.text}
                </div>
              </div>
            ))}
          </div>
          <div className="right md:w-[85%] lg:w-[88%] bg-[#fefefe] rounded-3xl p-5">
            {productitems.map(
              (p) =>
                p.text === tab && (
                  <div
                    key={p.id}
                    className="eachitem w-full h-full flex justify-center items-center"
                  >
                    <div className="left flex flex-col justify-between h-full w-[50%]">
                      <div className="top flex flex-col gap-10">
                        <div className="writing flex flex-col gap-10">
                          <div className="title">
                            <h1 className=" text-3xl lg:text-4xl font-[800]">
                              {p.text}
                            </h1>
                          </div>
                          <div className="desc text-xl lg:text-2xl text-gray-400 font-[400]">
                            {p.desc}
                          </div>
                        </div>

                        <div className="submit">
                          <button className="text-hd-yellow hover:bg-hd-yellow hover:text-black hover:border hover:border-black transition-all ease-in-out duration-150 rounded-3xl md:w-[10vw] p-2">
                            Submit
                          </button>
                        </div>
                      </div>
                      <div className="bottom flex items-center">
                        <p className="text-[300] text-gray-400 cursor-pointer text-lg">
                          Know More{" "}
                          <NavigateNextIcon style={{ color: "black" }} />{" "}
                        </p>
                      </div>
                    </div>
                    <div className="right w-[50%] flex items-center justify-center">
                      <img
                        src={p.fullimg}
                        alt=""
                        className={`${
                          p.id === 4 ? "w-[15rem] xl:w-[17rem]" : "w-[30rem]"
                        }`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
