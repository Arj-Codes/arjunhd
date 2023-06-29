import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img from "../../assets/images/chargin/ac_charger_black.png";
import rq1 from "../../assets/images/rakshaqr/hospital.png";
import rq2 from "../../assets/images/rakshaqr/scanner.png";
import rq3 from "../../assets/images/rakshaqr/sms.png";
import rq4 from "../../assets/images/rakshaqr/securityuser.png";
import rq5 from "../../assets/images/rakshaqr/notification.png";
import rq11 from "../../assets/images/rakshaqr/Girl taking photo of damaged car flat vector illustration 1.png";
import { Carousel } from "react-responsive-carousel";
const Carousels = () => {
  interface oneitemsProp {
    id: number;
    img: string;
    name: string;
  }
  interface oneProp {
    id: number;
    title: string;
    fields: oneitemsProp[];
  }
  const oneitems: oneProp[] = [
    {
      id: 1,
      title: "Accident Use Case",
      fields: [
        {
          id: 1,
          img: rq2,
          name: "Bystander/good Samaritan would scan the Raksha QR code on the vehicle and can connect to your family and update about the accident",
        },
        {
          id: 2,
          img: rq4,
          name: "The family person would receive sms with vehicle insurance and medical insurance details.",
        },
        {
          id: 3,
          img: rq1,
          name: "highway delite team would call a near by hospital and police station",
        },
      ],
    },
    {
      id: 2,
      title: "In case of unattended",
      fields: [
        {
          id: 1,
          img: rq5,
          name: "In case of unattended Bystander/traffic police/parking person would scan RakshaQR and initiate call or sms to notify about vehicle status",
        },
        {
          id: 2,
          img: rq3,
          name: "You can get notified about unauthorised parking, wrong parking, vehicle being towed, or any other unusual activities such as unattended pets, fuel leaks, etc.",
        },
      ],
    },
  ];
  return (
    <div>
      <Carousel
        axis="horizontal"
        // autoPlay
        // infiniteLoop
        showStatus={false}
        // showIndicators={false}
        className=""
      >
        <div className="bg-[#f6f6f6] flex p-3 rounded-3xl">
          <div className="content flex flex-col sm:flex-row gap-3 w-full justify-center">
            {oneitems.map((o) => (
              <div
                className={`eachcontent flex flex-col ${
                  o.id === 1 ? "justify-between" : "gap-14"
                }  p-5 rounded-3xl bg-white sm:h-[20rem] sm:w-[50%]`}
              >
                <div className="title flex items-start">
                  <h1 className="text-xl font-[700]">{o.title}</h1>
                </div>
                <div className="inner__content flex flex-col gap-3">
                  {o.fields.map((f) => (
                    <div className="inner__field flex gap-2 items-center">
                      <div className="img p-3 rounded-full bg-black flex items-center justify-center">
                        <img src={f.img} alt="" className="" />
                      </div>
                      <div className="text">{f.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-[#f6f6f6] flex p-3 rounded-3xl">
            <div className="wrapper bg-white p-3 rounded-3xl flex flex-col justify-between sm:flex-row w-full">
              <div className="left flex flex-col w-[50%] items-start">
                <h1>A good samaritan can save your lives</h1>
                <h1 className="text-left">
                  Bystander/good Samaritan would scan the Raksha QR code on the
                  vehicle and can connect to your family and update about the
                  accident
                </h1>
              </div>
              <div className="right">
                <img src={rq11} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
