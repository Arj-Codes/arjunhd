import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
const Forms = () => {
  const navigate = useNavigate();
  const formitems = [
    {
      id: 1,
      title: "Vehicle Details",
      fields: [
        {
          id: 1,
          text: "Vehicle Registration Number",
        },
        {
          id: 2,
          text: "Vehicle Class",
        },
      ],
      uploads: [
        {
          id: 1,
          text: "Upload RC Front",
        },
        {
          id: 2,
          text: "Upload RC Back",
        },
      ],
    },
    {
      id: 2,
      title: "Personal Details",
      fields: [
        {
          id: 1,
          text: "First Name",
        },
        {
          id: 2,
          text: "Last Name",
        },
        {
          id: 3,
          text: "Gender",
        },
        {
          id: 4,
          text: "Date of Birth",
        },
        {
          id: 5,
          text: "Email",
        },
        {
          id: 6,
          text: "Mobile Number",
        },
        {
          id: 7,
          text: "ID Proof document",
        },
        {
          id: 8,
          text: "ID Proof number",
        },
      ],
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
    {
      id: 3,
      title: "Address Details",
      fields: [
        {
          id: 1,
          text: "House no",
        },
        {
          id: 2,
          text: "Building name",
        },
        {
          id: 3,
          text: "Address Line 1",
        },
        {
          id: 4,
          text: "Address Line 2",
        },
        {
          id: 5,
          text: "District / City",
        },
        {
          id: 6,
          text: "State",
        },
        {
          id: 7,
          text: "Pincode",
        },
      ],
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
        <div className="forms bg-white border border-gray-300 w-[65%] mx-auto p-5 rounded-2xl">
          <form action="" className="flex flex-col gap-4">
            {formitems.map((f) => (
              <div className="div flex flex-col" key={f.id}>
                <div className="title mb-2">
                  <h1 className="font-[600] text-lg">{f.title}</h1>
                </div>
                <div className="main_content">
                  {f.id === 1 && (
                    <div className="first flex w-full h-fit my-1">
                      <div className="left flex flex-col gap-4 w-[50%]">
                        {f.fields.map((ff) => (
                          <div
                            className="per w-fit relative flex items-center"
                            key={ff.id}
                          >
                            <input
                              type="text"
                              placeholder={ff.text}
                              className="rounded-xl w-[30vw] p-4 text-sm placeholder-bg-300 font-[300] outline-none border-none bg-[#f6f6f6]"
                            />
                            {ff.id === 2 && (
                              <KeyboardArrowDownIcon
                                className="absolute z-10 right-0 cursor-pointer"
                                fontSize="large"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="right flex w-[60%] justify-around">
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
                  )}
                  {/* END OF FIRST ELEMENT */}
                  {f.id === 2 && (
                    <div className="second flex flex-col">
                      <div className="top w-full flex flex-wrap gap-4 justify-between relative">
                        {f.fields.slice(0, 6).map((fs) => (
                          <div className="items" key={fs.id}>
                            <input
                              type="text"
                              placeholder={fs.text}
                              className="rounded-xl w-[20vw] p-4 text-sm placeholder-bg-300 font-[300] outline-none border-none bg-[#f6f6f6]"
                            />
                            {fs.id === 3 && (
                              <KeyboardArrowDownIcon
                                className="absolute z-10 right-0 top-2 cursor-pointer"
                                fontSize="large"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="bottom flex">
                        <div className="left w-[45%] flex flex-col gap-4 mt-4">
                          {f.fields.slice(6).map((ffs) => (
                            <div className="items w-fit relative" key={ffs.id}>
                              <input
                                type="text"
                                placeholder={ffs.text}
                                className="rounded-xl w-[28vw] p-4 text-sm placeholder-bg-300 font-[300] outline-none border-none bg-[#f6f6f6]"
                              />
                              {ffs.id === 8 && (
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
                    </div>
                  )}
                  {/* END OF SECOND ELEMENT  */}
                  {f.id === 3 && (
                    <div className="third flex flex-wrap justify-between gap-4">
                      {f.fields.map((f3) => (
                        <div className="items">
                          <input
                            type="text"
                            placeholder={f3.text}
                            className="rounded-xl w-[20vw] p-4 text-sm placeholder-bg-300 font-[300] outline-none border-none bg-[#f6f6f6]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="button flex w-full justify-end mt-5">
              <button className="p-2 w-[8vw] text-lg bg-black text-hd-yellow hover:bg-hd-yellow hover:text-black hover:border hover:border-black rounded-3xl transition-all ease-linear duration-150">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
