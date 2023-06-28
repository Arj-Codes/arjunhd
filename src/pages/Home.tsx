import Hero from "../containers/home/Hero";
import Map from "../containers/home/Map";
import Services from "../containers/home/Services";
import Products from "../containers/home/Products";
import Explore from "../containers/home/Explore";
import Companies from "../containers/home/Companies";


const Home = () => {


  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Map />
      <Services />
      <Products />
      <Explore />
      <Companies />
    </div>
  );
};

export default Home;
