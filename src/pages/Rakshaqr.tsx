import Benefits from "../containers/rakshaqr/Benefits"
import Details from "../containers/rakshaqr/Details"
import Hero from "../containers/rakshaqr/Hero"
import Works from "../containers/rakshaqr/Works"
// import Videoplayer from "../containers/rakshaqr/Videoplayer"
const Rakshaqr = () => {
  return (
    <div className="flex flex-col gap-10 w-screen">
      <Hero />      
      <Details />
      {/* <Videoplayer /> */}
      <Benefits />
      <Works />
    </div>
  )
}

export default Rakshaqr
