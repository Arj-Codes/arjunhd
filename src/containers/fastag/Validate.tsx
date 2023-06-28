import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
const Validate = () => {
  const navigate = useNavigate();
  const formitems = [
    {
      id: 1,
      text: "Enter Vehicle Number",
    },
    {
      id: 2,
      text: "Enter OTP",
    },
  ];
  return (
    <div className="h-[140vh] w-full bg-[#fefefe]">
      <div className="bg__Wrapper bg-[#050505] h-[50vh] relative flex flex-col gap-10">
        <div className="title w-[51vw] items-center justify-between flex mx-10">
          <NavigateBeforeIcon
            fontSize="large"
            style={{
              background: "#fefefe",
              borderRadius: "50%",
              padding: "2px",
            }}
            className="cursor-pointer"
            onClick={() => {
              navigate("/fastag");
            }}
          />
          <h1 className="text-2xl font-[600] text-white">Buy Fastag</h1>
        </div>
        <div className="forms bg-white border border-gray-300 sm:w-[65%] mx-auto p-10 rounded-2xl">
          <form action="" className="flex flex-col gap-4">
            {formitems.map((f) => (
              <div className="item mx-auto" key={f.id}>
                <input
                  type="text"
                  placeholder={f.text}
                  className="rounded-xl w-fit sm:w-[30vw] p-4 text-sm placeholder-bg-300 font-[300] outline-none border-none bg-[#f6f6f6]"
                />
              </div>
            ))}
            <div className="button flex w-full mt-5 justify-center">
              <button className="p-2 w-fit text-sm bg-black text-hd-yellow hover:bg-hd-yellow hover:text-black hover:border hover:border-black rounded-3xl transition-all ease-linear duration-150">
                Request OTP
              </button>
            </div>
            <div className="button flex w-full mt-5 justify-end">
              <button className="p-2 sm:w-[8vw] w-fit text-sm bg-black text-hd-yellow hover:bg-hd-yellow hover:text-black hover:border hover:border-black rounded-3xl transition-all ease-linear duration-150">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Validate;
