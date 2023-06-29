import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import pic1 from "../../assets/images/rakshaqr/id1.webp";
import pic2 from "../../assets/images/rakshaqr/id2.webp";
import pic3 from "../../assets/images/rakshaqr/id3.webp";
import pic4 from "../../assets/images/rakshaqr/id4.webp";
import pic5 from "../../assets/images/rakshaqr/id5.webp";
import mobile from "../../assets/images/rakshaqr/mobile.webp";
const Benefits = () => {
  interface benefititemsProp {
    id: number;
    img: string;
    text: string;
  }
  const benitems: benefititemsProp[] = [
    {
      id: 1,
      img: pic1,
      text: "Vehicle causing inconvenience  ",
    },
    {
      id: 2,
      img: pic2,
      text: "Vehicle being towed",
    },
    {
      id: 3,
      img: pic3,
      text: "Vehicle needs attention (fuel leak)",
    },
    {
      id: 4,
      img: pic4,
      text: "Parked at no parking",
    },
    {
      id: 5,
      img: pic5,
      text: "Left kid, pet or key inside the vehicle",
    },
  ];
  return (
    <div>
      <div className="wrapper section-padding w-screen flex flex-col items-center justify-around h-fit gap-10">
        <div className="title">
          <h1 className="text-2xl xxl:text-5xl font-[700]">
            Benefits of RakshaQR
          </h1>
        </div>
        <div className="top w-full my-3">
          <div className="top__wrapper px-3 rounded-3xl bg-[#0b0b0b] md:w-[95%] mx-auto flex flex-col md:flex-row justify-center items-center">
            <div className="left order-2 md:order-1 w-full md:w-[30%] flex items-center justify-center md:items-end md:justify-end">
              <img
                src={mobile}
                alt=""
                className="w-[15rem] xxl:w-[30rem]"
                loading="lazy"
              />
            </div>
            <div className="right order-1 md:order-2 w-full md:w-[65%] flex flex-col p-5 gap-2">
              <div className="title">
                <h1 className="text-2xl xxl:text-4xl font-[700] text-white">
                  Met with an accident & unconcscious?
                </h1>
              </div>
              <div className="subtitle">
                <h1 className=" font-[400] xxl:text-3xl text-[#ffffff]">
                  Worry not! RakshaQR can be your life Saviour.
                </h1>
              </div>
              <div className="content flex flex-col sm:flex-row text-[#c6c6c6] font-[300] mt-8 xxl:text-3xl">
                <div className="left flex items-start sm:w-[50%] py-5 gap-1">
                  <FiberManualRecordIcon
                    fontSize="small"
                    className="mt-[2px]"
                    style={{ color: "white" }}
                  />
                  <p>
                    Bystanders police can inform your family via call/SMS by
                    scanning RakshaQR and get you emergency care
                  </p>
                </div>
                <div className="right flex items-start justify-center sm:w-[50%] py-5 gap-1">
                  <FiberManualRecordIcon
                    fontSize="small"
                    className="mt-[2px]"
                    style={{ color: "white" }}
                  />
                  <p>
                    highway delite call center team will also intimate nearby
                    hospitals about the accident location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle w-full my-3">
          <div className="middle__wrapper w-[95%] mx-auto p-8 rounded-3xl bg-[#0b0b0b] flex flex-col justify-center items-center gap-3">
            <div className="top text-2xl xxl:text-4xl font-[600] text-[#ffffff] ">
              <h1>Worried about your loved vehicle while it is unattended ?</h1>
            </div>
            <div className="bottom text-lg xxl:text-3xl font-[400] text-[#909090]">
              <h1>
                Be relaxed, RakshaQR can help you to get notified for any
                unexpected vehicle scenario.
              </h1>
            </div>
          </div>
        </div>
        <div className="bottom w-full my-3">
          <div className="bottom__wrapper w-[95%] mx-auto flex flex-wrap gap-5 justify-around sm:justify-center">
            {benitems.map((b) => (
              <div className="eachitem p-5 rounded-3xl flex flex-col items-center justify-center gap-3 xxl:gap-8 border border-black w-[10rem] h-[10rem] xxl:w-[20rem] xxl:h-[20rem]">
                <div className="img">
                  <img
                    src={b.img}
                    alt=""
                    className="w-[3rem] xxl:w-[6rem]"
                    loading="lazy"
                  />
                </div>
                <div className="text">
                  <h1 className="text-center text-sm xxl:text-2xl">{b.text}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
