import ac_charger_black from "../../assets/images/chargin/ac_charger_black.webp";
import ac_charger_white from "../../assets/images/chargin/ac_charger_white.webp";
import ac_charger_stand_right from "../../assets/images/chargin/ac_charger_stand_right.webp";
import ac_charger_stand_left from "../../assets/images/chargin/ac_charger_stand_left.webp";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Acchargers = () => {
  interface acprops {
    id: number;
    img: string;
    name: string;
    power: string;
  }
  const acchargeritems: acprops[] = [
    {
      id: 1,
      img: ac_charger_black,
      name: "AC Charger",
      power: "3.3 KW",
    },
    {
      id: 2,
      img: ac_charger_stand_right,
      name: "AC Charger",
      power: "7.6 KW",
    },
    {
      id: 3,
      img: ac_charger_stand_left,
      name: "AC Charger",
      power: "7.6 KW",
    },
    {
      id: 5,
      img: ac_charger_white,
      name: "AC Charger",
      power: "7.6 KW",
    },
  ];
  return (
    <div className="h-fit w-full section-padding">
      <div className="wrapper w-full flex flex-col gap-8 p-10">
        <div className="items w-full flex flex-col md:flex-row gap-10">
          {acchargeritems.map((a) => (
            <div
              className={`eachitem w-full lg:h-fit lg:justify-center
              ${a.id === 1 && "mt-24"} 
              ${a.id === 3 && "mt-8"} 
              flex gap-3 items-center lg:items-end 
              ${a.id === 5 && "lg:items-start"} 
              ${a.id % 2 === 0 ? "justify-end" : "justify-start"} 
              ${a.id === 2 && "lg:hidden"} 
              ${a.id === 3 && "hidden lg:flex"}`}
              key={a.id}
            >
              <div className="img">
                <img
                  src={a.img}
                  alt=""
                  className="w-[25rem] md:w-[12rem] xxl:w-[25rem]"
                  loading="lazy"
                />
              </div>
              <div className="name flex flex-col mb-5">
                <h1 className="text-6xl md:text-lg xxl:text-4xl">{a.name}</h1>
                <h1 className="text-8xl md:text-2xl xxl:text-5xl font-[800]">
                  {a.power}
                </h1>
              </div>
              <div className="icons bg-black p-1 rounded-lg mb-8">
                <NavigateNextIcon fontSize="large" className="text-white" />
              </div>
            </div>
          ))}
        </div>
        <div className="title w-full flex items-center justify-center lg:justify-start lg:relative">
          <h1 className="text-9xl lg:text-5xl xl:text-6xl xxl:text-9xl font-[800] lg:absolute -top-28 xxl:-top-80">
            {" "}
            <span className="text-chargin-green">AC</span> Chargers{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Acchargers;
