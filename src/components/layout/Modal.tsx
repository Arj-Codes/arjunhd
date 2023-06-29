import { AnimatePresence, motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
import logo from "../../assets/images/header/profile2.webp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../redux/slices/navSlice";
import { IRootState } from "../../redux/store";
// import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const Modal = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state: IRootState) => state.nav);

  interface navProp {
    id: number;
    name: string;
    path: string;
  }
  const navitems: navProp[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Chargin",
      path: "/chargin",
    },
    {
      id: 3,
      name: "Raksha QR",
      path: "/rakshaqr",
    },
    {
      id: 4,
      name: "FASTag",
      path: "/fastag",
    },
    {
      id: 5,
      name: "Services",
      path: "/services",
    },
    {
      id: 6,
      name: "Blog",
      path: "/blog",
    },
  ];
  const navigate = useNavigate();
  const handleActive = (e: number) => {
    dispatch(setActive({ active: e }));
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5 }}
        className="h-screen w-screen bg-[#090909] sm:hidden p-5 flex flex-col justify-between"
      >
        <div className="top w-full flex justify-between items-center">
          <div className="left flex items-center justify-between w-[65%]">
            <div className="img">
              <img src={logo} alt="" className="w-[3rem]" />
            </div>
            <div className="name flex flex-col">
              <h1 className="font-[600] text-hd-yellow text-lg">
                Saanvi Joshi
              </h1>
              <h1 className=" text-[#fefefe]">tempmail@gmail.com</h1>
            </div>
          </div>
          <div className="right items-center">
            <CancelIcon fontSize="large" style={{ color: "white" }} />
          </div>
        </div>
        <div className="middle w-full h-fit flex flex-col gap-10 text-xl font-[500]">
          {navitems.map((n) => (
            <div
              className="eachitem cursor-pointer flex flex-col"
              key={n.id}
              onClick={() => {
                handleActive(n.id);
                navigate(n.path);
              }}
            >
              <h1
                className={`${
                  active === n.id ? "text-hd-yellow" : "text-[#9d9d9d]"
                }`}
              >
                {n.name}
              </h1>
              {active === n.id && (
                <div className={`h-[2px] bg-hd-yellow w-[22px]`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className="logout flex items-center gap-2">
            <div className="logouticon flex items-center border border-hd-yellow rounded-full p-2">
              <LogoutIcon
                fontSize="medium"
                style={{ color: "white" }}
                className=""
              />
            </div>
            <h1 className="font-[600] text-white text-lg">Logout</h1>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
