import Functions from "../containers/fastag/Functions"
import Hero from "../containers/fastag/Hero"
import Manage from "../containers/fastag/Manage"
// import Maps from "../containers/fastag/Maps"
import Recharge from "../containers/fastag/Recharge"

const Fastag = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Functions />
      <Recharge />
      <Manage />
      {/* <Maps /> */}
    </div>
  )
}

export default Fastag
