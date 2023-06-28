import { ThemeProvider } from "@mui/material";
import { themes } from "../styles/styles";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/header/logo2.webp";
import proflogo from "../../assets/images/header/profile2.webp";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../redux/slices/navSlice";
import {IRootState} from "../../redux/store";


const Header = () => {
  const { active } = useSelector((state: IRootState) => state.nav);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  interface navProp {
    id: number;
    name: string;
    path: string;
  }
  const [modal, setModal] = useState(false);
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
  const handleActive = (e: number) => {
    dispatch(setActive({active:e}));
  };

  return (
    <ThemeProvider theme={themes}>
      <div className="nav w-full h-fit p-3 bg-[#090909] relative">
        <div className="nav__Wrapper flex justify-between rounded-2xl h-[10vh] w-[95%] mx-auto p-3 bg-[#393939] bg-opacity-40">
          <div className="left w-fit h-full flex items-center">
            <div className="img">
              <img src={logo} alt="" className="w-[8rem] sm:w-[6rem] xxl:w-[10rem]" />
            </div>
          </div>
          <div className="right hidden sm:flex w-fit h-full gap-14">
            <div className="left flex items-center gap-8 text-[#8f8f8f] font-[500] text-lg xxl:text-3xl">
              {navitems.map((n) => (
                <div
                  className="eachitem cursor-pointer flex flex-col"
                  key={n.id}
                  onClick={() => {
                    handleActive(n.id);
                    navigate(n.path);
                  }}
                >
                  <h1>{n.name}</h1>
                  {active === n.id && (
                    <div className={`h-[2px] bg-hd-yellow w-[22px]`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="right flex items-center gap-4 cursor-pointer xxl:text-2xl">
              <div className="title">
                <h1 className="text-hd-yellow">Saanvi Joshi</h1>
              </div>
              <div className="img">
                <img src={proflogo} alt="" className="w-[3rem] xxl:w-[5rem]" />
              </div>
            </div>
          </div>
          <div className="rightmodal flex sm:hidden relative items-center">
            <MenuIcon
              fontSize="large"
              style={{ color: "white" }}
              className="cursor-pointer z-50"
              onClick={() => {
                setModal(!modal);
                navigate(`/modal`);
              }}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Header;
