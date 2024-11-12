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
import { PORTADA1, PORTADA2, PORTADA3, PORTADA4, PORTADA5, PORTADA6, PORTADA7 } from "./assets";

const App = () => {
  const sliderImages = [
    <img key={1} src={PORTADA1} alt="Portada 1" className="w-full h-full object-cover" />,
    <img key={2} src={PORTADA2} alt="Portada 2" className="w-full h-full object-cover" />,
    <img key={3} src={PORTADA3} alt="Portada 3" className="w-full h-full object-cover" />,
    <img key={4} src={PORTADA4} alt="Portada 4" className="w-full h-full object-cover" />,
    <img key={5} src={PORTADA5} alt="Portada 5" className="w-full h-full object-cover" />,
    <img key={6} src={PORTADA6} alt="Portada 6" className="w-full h-full object-cover" />,
    <img key={7} src={PORTADA7} alt="Portada 7" className="w-full h-full object-cover" />,
  ];

  const texts = [
    { line1: "EVENTOS", line2: "CORPORATIVOS", link: "#portfolio" },
    { line1: "FERIAS &", line2: "CONGRESOS", link: "#portfolio" },
    { line1: "FAMILY", line2: "DAY", link: "#portfolio" },
    { line1: "MERCHANDISING &", line2: "REGALOS EMPRESARIALES", link: "#portfolio" },
    { line1: "FOTOGRAFÍA &", line2: "FILMMAKERS", link: "#portfolio" },
    { line1: "TRADE MKT &", line2: "LOGÍSTICA", link: "#portfolio" },
  ];



  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <div className="w-screen max-h-screen">
        <Carousel sliderImages={sliderImages} texts={texts} />
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
