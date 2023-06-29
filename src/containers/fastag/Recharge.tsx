import step1 from "../../assets/images/fastag/step01.webp"
import step2 from "../../assets/images/fastag/step02.webp"
import step3 from "../../assets/images/fastag/step03.webp"
import step4 from "../../assets/images/fastag/step04.webp"
import step6 from "../../assets/images/fastag/step06.webp"
import step7 from "../../assets/images/fastag/step07.webp"
import step8 from "../../assets/images/fastag/step08.webp"
import { motion } from "framer-motion";
const Recharge = () => {
  const steps = [
    {
      id: 1,
      name: "Step 01",
      text: "Download highway delite app",
      img: step1,
    },
    {
      id: 2,
      name: "Step 02",
      text: "Sign In to highway delite app",
      img: step2,
    },
    {
      id: 3,
      name: "Step 03",
      text: "Select recharge fastag",
      img: step3,
    },
    {
      id: 4,
      name: "Step 04",
      text: "Enter registered phone number",
      img: step4,
    },
    {
      id: 5,
      name: "Step 06",
      text: "Select recharge option for particular fastag",
      img: step6,
    },
    {
      id: 6,
      name: "Step 07",
      text: "Enter recharge amount",
      img: step7,
    },
    {
      id: 7,
      name: "Step 08",
      text: "Select payment gateway and complete the payment, its done!",
      img: step8,
    },
  ];
  return (
    <div className="w-full h-fit hidden sm:flex flex-col p-3 items-center gap-8 ">
      <div className="title">
        <h1 className="text-4xl font-[500] xxl:text-5xl">
          FASTag Recharge Guide
        </h1>
      </div>
      <div className="content__wrapper border guide border-gray-300 flex flex-wrap justify-around gap-28 w-[95%] h-full rounded-2xl p-10">
        {steps.map((s) => (
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.35 }}
            className="eachstep flex flex-col gap-2 items-center cursor-pointer"
            key={s.id}
          >
            <img src={s.img} alt="" className="xxl:w-[10vw]" loading="lazy" />
            <h1 className="font-[600] text-xl xxl:text-3xl">{s.name}</h1>
            <p className="md:w-[15vw] w-[20vw] text-center xxl:text-2xl">
              {s.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Recharge;
