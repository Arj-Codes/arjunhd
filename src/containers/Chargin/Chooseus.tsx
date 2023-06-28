import c1 from "../../assets/images/chargin/choose1.png"
import c2 from "../../assets/images/chargin/choose2.png"
import c3 from "../../assets/images/chargin/choose3.png"
import c4 from "../../assets/images/chargin/choose4.png"
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
      <div className="wrapper p-8 rounded-3xl w-[95%] flex mx-auto bg-[#f6f6f6] justify-between">
        <div className="left w-[25rem] flex flex-col gap-8 justify-between">
          <div className="top">
            <h1 className="font-[700] text-4xl">
              Why Choose <span className="text-chargin-green">Us ?</span>{" "}
            </h1>
            <h1 className="font-[500] text-2xl">we are building a sustainable future.</h1>
          </div>
          <div className="bottom">
            <h1 className="text-[#b9b9b9]">
              world's largest verified highways wayside amenities & charging
              network
            </h1>
          </div>
        </div>
        <div className="right w-[45rem] flex flex-wrap justify-between">
          {chooseitems.map((c)=>(
            <div className="eachitem flex" key={c.id}>
              <div className="img flex items-center justify-center">
                <img src={c.img} alt="" className="w-[8rem] rounded-3xl"/>
              </div>
              <div className="dets flex flex-col justify-center w-[12rem] text-lg">
                <div className="users text-chargin-green font-[700] text-xl">{c.users}</div>
                <div className="text">{c.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chooseus
