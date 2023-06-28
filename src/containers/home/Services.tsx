import safe_car_black from "../../assets/images/home/safe_car_black.webp";
import food_black from "../../assets/images/home/food_black.webp";
import medical_black from "../../assets/images/home/medical_black.webp";
import fuel_pump_black from "../../assets/images/home/fuel_pump_black.webp";
import chargin_station_black from "../../assets/images/home/chargin_station_black.webp";
const Services = () => {
  interface allitemsProp {
    id: number;
    title: string;
    text: string;
  }
  const allitems: allitemsProp[] = [
    {
      id: 1,
      title: "Safe stays on highways",
      text: "Get access to verified lodges/hotels with facilities as per your choice",
    },
    {
      id: 2,
      title: "Medical Aid",
      text: "When you need it and where you need it the most , locate the nearest option",
    },
    {
      id: 3,
      title: "Driving at night",
      text: "Know 24 hours fuel pump with credit card facility and verified washrooms",
    },
    {
      id: 4,
      title: "Explore food options",
      text: "As per your choice - Veg or Non-veg - it's covered",
    },
    {
      id: 5,
      title: "EV charging points",
      text: "24 hours working verified EV vehicle Charging Points",
    },
  ];
  return (
    <div>
      <div className="section-padding">
        <p className="text-4xl xl:text-5xl xxl:text-6xl font-bold">
          All of this, Where ever you
          <span className="text-hd-yellow"> go</span>
        </p>
      </div>

      <div className="bg-[#f6f6f6] w-[95%] mx-auto rounded-3xl h-fit md:h-[45vh] flex md:flex-row flex-col items-center justify-between gap-5 p-3">
        <div className="left w-[95%] md:w-[35%] gap-5 h-full justify-center xl:justify-evenly flex flex-col">
          {allitems.slice(0, 2).map((a1) => (
            <div
              className="eachitem flex gap-4 p-4  rounded-3xl bg-[#fefefe]"
              key={a1.id}
            >
              <div className="image flex items-center">
                {a1.id === 1 ? (
                  <img
                    src={safe_car_black}
                    alt=""
                    className="w-[6rem] xxl:w-[10rem]"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={medical_black}
                    alt=""
                    className="w-[6rem] xxl:w-[10rem]"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="det flex flex-col justify-center xxl:gap-3">
                <div className="title font-bold text-sm lg:text-lg xl:text-xl xxl:text-4xl">
                  {a1.title}
                </div>
                <div className="text-xs lg:text-sm xl:text-md xxl:text-xl">
                  {a1.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="middle w-[95%] md:w-[25%] gap-5">
          {allitems.slice(2, 3).map((a1) => (
            <div
              className="eachitem flex flex-row md:flex-col gap-3 p-4 md:p-6 xl:p-8 rounded-3xl bg-[#fefefe]"
              key={a1.id}
            >
              <div className="image">
                <img
                  src={fuel_pump_black}
                  alt=""
                  className="w-[6rem] xxl:w-[10rem] mx-auto"
                  loading="lazy"
                />
              </div>
              <div className="det flex flex-col md:items-center justify-center gap-3">
                <div className="title font-bold">
                  {" "}
                  <h1 className="text-md lg:text-lg xl:text-xl xxl:text-4xl">
                    {a1.title}
                  </h1>{" "}
                </div>
                <div className="text-xs lg:text-sm xl:text-md xxl:text-xl flex justify-center items-center">
                  {" "}
                  <p className="">{a1.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="right h-full justify-center xl:justify-evenly w-[95%] md:w-[35%] gap-5 flex flex-col">
          {allitems.slice(3, 5).map((a1) => (
            <div
              className="eachitem flex gap-4 p-4 rounded-3xl bg-[#fefefe]"
              key={a1.id}
            >
              <div className="image">
                {a1.id === 4 ? (
                  <img
                    src={food_black}
                    alt=""
                    className="w-[6rem] xxl:w-[10rem]"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={chargin_station_black}
                    alt=""
                    className="w-[6rem] xxl:w-[10rem]"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="det flex flex-col justify-center">
                <div className="title font-bold text-sm lg:text-lg xl:text-xl xxl:text-4xl">
                  {a1.title}
                </div>
                <div className="text-xs lg:text-sm xl:text-md xxl:text-xl">
                  {a1.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
