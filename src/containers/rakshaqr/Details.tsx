import sticker from "../../assets/images/rakshaqr/Artboard.png";
const Details = () => {
  return (
    <section className="h-fit sm:h-[100vh] xxl:h-[80vh] w-screen section-padding flex justify-center items-center">
      <div className="wrapper xl:w-[80%] mx-auto rounded-3xl p-4 bg-[#f6f6f6] flex flex-col gap-5 ">
        <div className="top p-8 rounded-3xl bg-white flex flex-col sm:flex-row w-full">
          <div className="left sm:w-[50%] flex flex-col gap-7 xxl:gap-10 order-2 sm:order-1">
            <div className="title">
              <h1 className="text-4xl xxl:text-6xl font-[700]">RakshaQR</h1>
            </div>
            <div className="content flex flex-col gap-5 font-[400] text-[#515151] xxl:text-2xl">
              <p className="">
                RakshaQr can help to save life by enabling bystander to scan the
                RakshaQR and inform the family member of accident victim
              </p>
              <p>
                {" "}
                RakshaQR helps you to get notified while your vehicle is being
                unattended about your vehicle unusual activities.
              </p>
            </div>
            <div className="button flex gap-3 w-full">
              <button className="text-sm xxl:text-2xl p-1 whitespace-nowrap w-[10rem] sm:w-[10rem] sm:h-[3rem] font-[500] bg-black text-hd-yellow hover:bg-hd-yellow hover:text-black hover:border hover:border-black transition-all ease-in duration-150 rounded-3xl">
                Buy Now
              </button>
              <button className="border xxl:text-2xl border-black text-sm p-2 sm:p-1 xxl:p-2 whitespace-nowrap h-[3rem] bg-white rounded-3xl">
                Order replacement
              </button>
            </div>
          </div>
          <div className="right max-h-min sm:w-[50%] flex items-center justify-center sm:justify-end xxl:justify-center order-1 sm:order-2">
            <img src={sticker} alt="" className="h-[18rem] xxl:h-[30rem]" />
          </div>
        </div>
        <div className="bottom w-full flex items-center justify-center p-3">
          <div className="buttons flex gap-8 ">
            <button className="bg-white xxl:text-2xl w-[8rem] p-3 shadowbtn rounded-3xl">
              Renew
            </button>
            <button className="bg-white xxl:text-2xl w-[8rem] p-3 shadowbtn rounded-3xl">
              Update
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
