import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
const Replacement = () => {
  const navigate = useNavigate();

  interface FieldProp {
    id: number;
    text: string;
    marked: boolean;
  }
  const field: FieldProp[] = [
    {
      id: 1,
      text: "ID Proof Document",
      marked: true,
    },
    {
      id: 2,
      text: "ID Document Number",
      marked: false,
    },
    {
      id: 3,
      text: "Paid by",
      marked: true,
    },
    {
      id: 4,
      text: "Replacement reason",
      marked: true,
    },
    {
      id: 5,
      text: "Vehicle Class",
      marked: true,
    },
  ];



  const formitems = [
    {
      id: 1,
      fields: [
        {
          id: 1,
          text: "Agent ID",
        },
        {
          id: 2,
          text: "Vehicle Number",
        },
      ],
    },
    {
      id: 2,
      title: "Enter new barcode",
      fields: [
        {
          id: 1,
          text: "608116",
        },
        {
          id: 2,
          text: "Barcode 2",
        },
        {
          id: 3,
          text: "Barcode 3",
        },
      ],
    },
    {
      id: 3,
      title: "Choose ID proof document",
      uploads: [
        {
          id: 1,
          text: "Upload ID Front",
        },
        {
          id: 2,
          text: "Upload ID Back",
        },
      ],
    },
  ];
  return (
    <div className="h-[120vh] w-full bg-[#fefefe]">
      <div className="bg__Wrapper bg-[#050505] h-[50vh] relative flex flex-col gap-10">
        <div className="title w-[51vw] items-center justify-between flex ml-28">
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
          <h1 className="text-2xl font-[600] text-white">
            Order Replacement Tag
          </h1>
        </div>
        <div className="forms bg-white border border-gray-300 w-[65%] mx-auto p-5 rounded-2xl">
          <form action="" className="flex flex-col gap-4">
            {formitems.map((f) => (
              <div className="div flex flex-col" key={f.id}>
                <div className="title mb-2 flex flex-col">
                  <h1 className="font-[600] text-lg">{f.title}</h1>
                  {f.id === 2 && (
                    <h1 className="font-[400] text-xs">
                      Please Collect the new FASTag sticker from HD partner and
                      type barcode
                    </h1>
                  )}
                </div>
                <div className="main_content">
                  {f.id === 1 && (
                    <div className="first flex w-full h-fit my-1">
                      <div className="left flex gap-4 w-[50%]">

                      </div>
                    </div>
                  )}
                  {/* END OF FIRST ELEMENT */}
                  {f.id === 2 && (
                    <div className="second flex flex-col">
                      <div className="top w-full flex flex-wrap gap-4 justify-between relative">
                      </div>
                    </div>
                  )}
                  {/* END OF SECOND ELEMENT  */}
                  {f.id === 3 && (
                    <div className="second flex flex-col gap-10">
                      <div className="bottom flex">
                        <div className="left w-[45%] flex flex-col gap-4 mt-4">
                          {field.slice(0, 2).map((ffs) => (
                            <div className="items w-fit relative" key={ffs.id}>
                              <input
                                type="text"
                                placeholder={ffs.text}
                                className="rounded-xl w-[28vw] p-4 text-sm placeholder-bg-300 font-[300] outline-none border-none bg-[#f6f6f6]"
                              />
                              {ffs.marked && (
                                <KeyboardArrowDownIcon
                                  className="absolute z-10 right-0 top-2 cursor-pointer"
                                  fontSize="large"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="right flex w-[55%] mt-4 justify-end gap-10">
                          {f.uploads?.map((fu) => (
                            <div className="per" key={fu.id}>
                              <input
                                type="file"
                                id="img"
                                className="hidden"
                                name="img"
                                // inputProps={{ accept: "image/*" }}
                                // onClick={()=>{navigate("/chargin")}}
                              />
                              <label
                                htmlFor="img"
                                className="bg-[#f6f6f6] p-12 flex justify-center items-center rounded-2xl text-gray-300 cursor-pointer"
                              >
                                {fu.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="top w-full flex flex-wrap gap-4 justify-between">
                        {field.slice(2).map((fs) => (
                          <div className="items relative" key={fs.id}>
                            <input
                              type="text"
                              placeholder={fs.marked ? "true" : "false"}
                              className="rounded-xl w-[20vw] p-4 text-sm placeholder-bg-300 font-[300] outline-none border-none bg-[#f6f6f6]"
                            />
                            {fs.marked && (
                              <KeyboardArrowDownIcon
                                className="absolute z-10 right-2 top-2"
                                fontSize="large"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="button flex w-full justify-end mt-5">
              <button className="p-2 w-[8vw] text-lg bg-black text-hd-yellow hover:bg-hd-yellow hover:text-black hover:border hover:border-black rounded-3xl transition-all ease-linear duration-150" onClick={()=>{
                navigate("/validate");
              }}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Replacement;
