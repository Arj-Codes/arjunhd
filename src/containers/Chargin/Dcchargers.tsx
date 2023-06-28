import dc1 from "../../assets/images/chargin/dc_charger_1.webp";
import dc2 from "../../assets/images/chargin/dc_charger_2.webp";
import dc3 from "../../assets/images/chargin/dc_charger_3.webp";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Dcchargers = () => {
  interface acprops {
    id: number;
    img: string;
    name: string;
    power: string;
  }
  const acchargeritems: acprops[] = [
    {
      id: 1,
      img: dc1,
      name: "DC Charger",
      power: "50 KW",
    },
    {
      id: 2,
      img: dc3,
      name: "DC Charger",
      power: "60 KW",
    },
    {
      id: 3,
      img: dc2,
      name: "DC Charger",
      power: "120 KW",
    },
  ];
  return (
    <div className="h-fit w-full section-padding">
      <div className="wrapper w-full flex flex-col gap-8">
        <div className="items w-full flex flex-col md:flex-row gap-10">
          {acchargeritems.map((a) => (
            <div
              className={`eachitem w-full lg:h-fit lg:justify-center
              flex gap-3 items-center lg:items-end 
              ${a.id % 2 !== 0 ? "justify-end" : "justify-start"} `}
              key={a.id}
            >
              <div className="img">
                <img
                  src={a.img}
                  alt=""
                  className="w-[8rem] md:w-[12rem] xxl:w-[25rem]"
                />
              </div>
              <div className="name flex flex-col mb-5">
                <h1 className="text-sm md:text-lg xxl:text-4xl">{a.name}</h1>
                <h1 className="text-lg md:text-2xl xxl:text-5xl font-[800]">
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
          <h1 className="text-5xl lg:text-5xl xl:text-6xl xxl:text-9xl font-[800] lg:absolute -top-28 xxl:-top-80">
            {" "}
            <span className="text-chargin-green">DC</span> Chargers{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dcchargers;
