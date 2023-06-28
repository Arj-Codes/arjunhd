import Benefits from "../containers/rakshaqr/Benefits"
import Details from "../containers/rakshaqr/Details"
import Hero from "../containers/rakshaqr/Hero"
// import Videoplayer from "../containers/rakshaqr/Videoplayer"
const Rakshaqr = () => {
  return (
    <div className="flex flex-col gap-10 w-screen">
      <Hero />      
      <Details />
      {/* <Videoplayer /> */}
      <Benefits />
    </div>
  )
}

export default Rakshaqr
