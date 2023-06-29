import c1 from "../../assets/images/chargin/choose1.webp"
import c2 from "../../assets/images/chargin/choose2.webp"
import c3 from "../../assets/images/chargin/choose3.webp"
import c4 from "../../assets/images/chargin/choose4.webp"
const Chooseus = () => {
  interface chooseitemsProp {
    id:number;
    img:string;
    users:string;
    text:string;
  }

  const chooseitems: chooseitemsProp[] = [
    {
      id: 1,
      img: c1,
      users: "70,000+",
      text: "Verified highway routes",
    },
    {
      id: 2,
      img: c2,
      users: "3 Lakh+",
      text: "Monthly active users",
    },
    {
      id: 3,
      img: c3,
      users: "10 Lakh+",
      text: "Total users",
    },
    {
      id: 4,
      img: c4,
      users: "1.5 Lakh+",
      text: "Connected highway pitstops",
    },
  ];
  return (
    <div className="section-padding">
      <div className="wrapper p-8 rounded-3xl w-[95%] xxl:w-[70%] gap-10 flex flex-col lg:flex-row mx-auto bg-[#f6f6f6] justify-between">
        <div className="left w-[30rem] flex flex-col gap-8 justify-between">
          <div className="top flex flex-col gap-5">
            <h1 className="font-[700] text-5xl xxl:text-5xl">
              Why Choose <span className="text-chargin-green">Us ?</span>{" "}
            </h1>
            <h1 className="font-[500] text-3xl xxl:text-4xl">
              we are building a sustainable future.
            </h1>
          </div>
          <div className="bottom">
            <h1 className="text-[#b9b9b9] text-2xl xxl:text-2xl">
              world's largest verified highways wayside amenities & charging
              network
            </h1>
          </div>
        </div>
        <div className="right w-[45rem] xxl:w-[55rem] flex flex-wrap justify-between">
          {chooseitems.map((c) => (
            <div className="eachitem flex w-fit" key={c.id}>
              <div className="img flex items-center justify-center">
                <img src={c.img} alt="" className="w-[12rem] lg:w-[8rem] xxl:w-[12rem] rounded-3xl" loading="lazy"/>
              </div>
              <div className="dets flex flex-col justify-center w-[12rem]">
                <div className="users text-chargin-green font-[700] text-4xl lg:text-2xl xxl:text-3xl">
                  {c.users}
                </div>
                <div className="text text-2xl lg:text-lg xxl:text-xl font-[500]">{c.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chooseus
