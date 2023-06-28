import route from "../../assets/images/home/route.webp";
import direction from "../../assets/images/home/direction.webp";
import dirt_bike from "../../assets/images/home/dirt_bike.webp";
import travel_bag from "../../assets/images/home/travel_bag.webp";
import gps_tracker from "../../assets/images/home/gps_tracker.webp";
import insurance from "../../assets/images/home/insurance.webp";
const Explore = () => {
  interface itemProp {
    id: number;
    text: string;
    img: string;
  }
  interface exploreitemsProp {
    id: number;
    title: string;
    item: itemProp[];
  }
  const exploreitems: exploreitemsProp[] = [
    {
      id: 1,
      title: "Explore Routes",
      item: [
        {
          id: 1,
          text: "State wise routes",
          img: route,
        },
        {
          id: 2,
          text: "Popular Routes",
          img: direction,
        },
      ],
    },
    {
      id: 2,
      title: "Explore Offers",
      item: [
        {
          id: 1,
          text: "Bikers Offers",
          img: dirt_bike,
        },
        {
          id: 2,
          text: "Travel Offers",
          img: travel_bag,
        },
      ],
    },
    {
      id: 3,
      title: "Other Service",
      item: [
        {
          id: 1,
          text: "GPS Tracker",
          img: gps_tracker,
        },
        {
          id: 2,
          text: "Insurance",
          img: insurance,
        },
      ],
    },
  ];
  return (
    <div className="section-padding w-full">
      <div className="wrapper flex flex-col sm:flex-row justify-center w-full sm:gap-0 gap-20">
        {exploreitems.map((e) => (
          <div className="eachitem flex flex-col gap-5" key={e.id}>
            <div className="title mx-auto w-fit">
              <h1 className="font-[700] text-4xl sm:text-2xl xxl:text-5xl">
                {e.title}
              </h1>
            </div>
            <div
              className={`content w-full sm:bg-[#f4f4f4] bg-none p-5 ${
                e.id === 1 && "rounded-l-3xl"
              } ${e.id === 3 && "rounded-r-3xl"}`}
            >
              <div className="content__wrapper sm:bg-none flex justify-center items-center sm:gap-10 gap-24">
                {e.item.map((i) => (
                  <div className="eachiteminside flex flex-col sm:bg-white bg-[#f4f4f4] rounded-3xl p-3 w-[20rem] sm:w-[11rem] xxl:w-[20rem] xxl:h-[20rem] h-[20rem] sm:h-[11rem] justify-center items-center gap-2 xxl:gap-5">
                    <div className="img">
                      <img
                        src={i.img}
                        alt=""
                        className="w-[10rem] sm:w-[5rem] xxl:w-[10rem]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <h1 className="font-[400] text-center text-3xl sm:text-lg xxl:text-3xl">
                        {i.text}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
