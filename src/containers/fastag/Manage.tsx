import qr from "../../assets/images/fastag/qr.webp";
import gp from "../../assets/images/fastag/gplay.webp";
import ap from "../../assets/images/fastag/appstore.webp";
const Manage = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="content__wrapper sm:w-[90%] md:w-[90%] w-[90%] h-[80%] flex flex-col justify-between xxl:justify-around text-center gap-10">
        <h1 className="font-[600] sm:text-5xl text-2xl">
          Manage & Recharge your FASTag with highway delite app
        </h1>
        <div className="qr flex flex-col gap-5 xxl:gap-20 text-center">
          <img
            src={qr}
            alt=""
            className="w-[10rem] h-[10rem] xl:h-[15rem] xl:w-[15rem] xxl:w-[25rem] xxl:h-[25rem] mx-auto"
            loading="lazy"
          />
          <h1 className="xxl:text-3xl">Scan the QR to download the app</h1>
          <div className="stores flex flex-col sm:flex-row mx-auto gap-5 xxl:gap-8">
            <img
              src={gp}
              alt=""
              className="h-[5vh] xxl:h-[7vh] cursor-pointer"
              loading="lazy"
            />
            <img
              src={ap}
              alt=""
              className="h-[5vh] xxl:h-[7vh] cursor-pointer"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
