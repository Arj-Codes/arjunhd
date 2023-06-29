import Carousels from "./Carousels";

const Works = () => {
  return (
    <div className="h-fit w-full flex flex-col gap-14">
      <div className="title font-[700] text-2xl w-full">
        <h1 className="text-center">How it works</h1>
      </div>
      <div className="wrapper w-[90%] mx-auto p-3 rounded-3xl">
        <Carousels />
        </div>      
    </div>
  );
};

export default Works;
