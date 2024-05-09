import { sliderImages } from "./constants";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Agencia from "./components/Agencia";
import Servicios from "./components/Servicios";
import Business from "./components/Business";
import Business1 from "./components/Business1";
import Business2 from "./components/Business2";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Partners from "./components/Partners";
import Contacto from "./components/Contacto";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <div className="w-screen max-h-screen">
        <Carousel>
          {sliderImages.map((item, index) => (
            <img src={item.img} key={index} className="max-h-screen"></img>
          ))}
        </Carousel>
      </div>
      <Agencia />
      <Business />
      <Servicios />
      <Business1 />
      <Portfolio />
      <Clients />
      <Business2 />
      <Partners />
      <Contacto />
    </div>
  );
};

export default App;
