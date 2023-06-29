import { motion } from "framer-motion";
import fimg from "../../assets/images/fastag/functions.webp";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
const Functions = () => {
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      content: [
        {
          id: 1.1,
          text: "Order new tag",
        },
        {
          id: 1.2,
          text: "Order replacement tag",
        },
      ],
    },
    {
      id: 2,
      content: [
        {
          id: 1.1,
          text: "Showroom Activation",
        },
        {
          id: 1.2,
          text: "Showroom Login",
        },
      ],
    },
    {
      id: 3,
      content: [
        {
          id: 1.1,
          text: "Showroom Activation Kotak (new)",
        },
        {
          id: 1.2,
          text: "Showroom Login Kotak (existing)",
        },
      ],
    },
    {
      id: 4,
      content: [
        {
          id: 1.1,
          text: "Fastag Recharge Guide",
        },
      ],
    },
  ];
  

  return (
    <div className="h-fit md:h-[100vh] w-full lg:p-28 p-4">
      <div className="content__wrapper bg-[#f6f6f6] rounded-[47px] h-full flex flex-col sm:flex-row justify-between items-center p-5">
        <div className="left sm:w-[55%] w-full order-2 sm:order-1">
          <div className="items">
            {items.map((i) => (
              <div
                className={`eachitem flex flex-col my-5 bg-[#ffffff] p-3 rounded-3xl ${
                  i.id === 4 && "sm:hidden"
                }`}
                key={i.id}
              >
                {i.content.map((c) => (
                  <div className="full">
                    <div
                      className={`inside flex justify-between p-3 items-center`}
                      key={c.id}
                    >
                      <div className="name">
                        <h1
                          id="h1"
                          className="text-sm sm:text-[17px] xxl:text-3xl"
                        >
                          {c.text}
                        </h1>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 180 }}
                        transition={{ duration: 0.75 }}
                        className="lg:h-[2vw] lg:w-[2vw] rounded-full bg-[#050505] flex justify-center items-center cursor-pointer"
                      >
                        {c.id === 1.2 ? (
                          <NavigateNextIcon
                            style={{ color: "ffe141" }}
                            fontSize="large"
                            onClick={() => {
                              navigate("/replacement");
                            }}
                          />
                        ) : (
                          <NavigateNextIcon
                            style={{ color: "ffe141" }}
                            fontSize="large"
                          />
                        )}
                      </motion.div>
                    </div>
                    {c.id === 1.1 && i.id != 4 && <hr />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="right sm:w-[40%] order-1 sm:order-2">
          <img src={fimg} alt="" className="w-fit" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Functions;
