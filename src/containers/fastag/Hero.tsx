import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="w-full h-[82vh] relative bg-[#050505] flex justify-center items-center">
        <div className=" herofastag circle w-[8vw] h-[8vw] absolute top-1/3 bg-[#ffe141] rounded-full right-1/2"></div>
        <div className="flex flex-col justify-center sm:w-[55vw] w-[95%] items-center gap-10">
          <h1 className="text-white text-3xl sm:w-[45vw] w-[95%] text-center font-bold xxl:text-5xl">
            Buy highway delite FASTag for hassle free experience in highway
          </h1>
          <p className="text-[#969696] text-center xxl:text-2xl">
            is simply dummy text of the printing and typetesting industry. Lorem
            ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a
          </p>

          <button className="rounded-[40px] bg-[#ffe141] hover:bg-black hover:text-[#ffe141] hover:border-[#ffe141] transition-all ease-out duration-150 xxl:text-2xl p-3 w-[8rem] hover:border" onClick={()=>{
            navigate("/forms");
          }}>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
