import the_hindu from "../../assets/images/home/the_hindu.webp";
import indian_express from "../../assets/images/home/indian_express.webp";
import bussiness_standard from "../../assets/images/home/bussiness_standard.webp";
import bangalore_mirror from "../../assets/images/home/bangalore_mirror.webp";

import karnataka from "../../assets/images/home/karnataka.webp";
import startup_karnataka from "../../assets/images/home/startup_karnataka.webp";
import bharat_petroleum from "../../assets/images/home/bharat_petroleum.webp";

import thousand_startups from "../../assets/images/home/thousand_startups.webp";
import mobile_10x from "../../assets/images/home/mobile_10x.webp";
import nsrcel from "../../assets/images/home/nsrcel.webp";
const Companies = () => {
  interface companiesProp {
    id: number;
    img: string;
  }
  interface companyProp {
    id: number;
    titleB: string;
    titleY: string;
    companies: companiesProp[];
  }
  const companyitems: companyProp[] = [
    {
      id: 1,
      titleB: "In the",
      titleY: "Media",
      companies: [
        {
          id: 1,
          img: the_hindu,
        },
        {
          id: 2,
          img: indian_express,
        },
        {
          id: 3,
          img: bussiness_standard,
        },
        {
          id: 4,
          img: bangalore_mirror,
        },
      ],
    },
    {
      id: 2,
      titleB: "Recognised & Funded",
      titleY: "By",
      companies: [
        {
          id: 1,
          img: karnataka,
        },
        {
          id: 2,
          img: startup_karnataka,
        },
        {
          id: 3,
          img: bharat_petroleum,
        },
      ],
    },
    {
      id: 3,
      titleB: "Incubated & Supported",
      titleY: "By",
      companies: [
        {
          id: 1,
          img: thousand_startups,
        },
        {
          id: 2,
          img: mobile_10x,
        },
        {
          id: 3,
          img: nsrcel,
        },
      ],
    },
  ];
  return (
    <div className="wrapper mb-32 lg:mb-10 flex flex-col items-center h-[120vh] sm:h-[100vh] xxl:h-[70vh] justify-between">
      {companyitems.map((c) => (
        <div
          className="eachitem flex flex-col w-[95%] items-center gap-8"
          key={c.id}
        >
          <div className="title">
            <h1 className="text-3xl xxl:text-5xl font-[700]">
              {" "}
              {c.titleB}
              <span className="text-hd-yellow"> {c.titleY}</span>{" "}
            </h1>
          </div>
          <div className="content flex flex-wrap justify-evenly gap-10 lg:gap-10 mb-10">
            {c.companies.map((cc) => (
              <div
                className="eachiteminside p-5 flex items-center justify-center bg-[#f4f4f4] rounded-2xl w-[18rem] xxl:w-[30rem] h-[6rem] xxl:h-[10rem]"
                key={cc.id}
              >
                <img src={cc.img} alt="" className={``} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
