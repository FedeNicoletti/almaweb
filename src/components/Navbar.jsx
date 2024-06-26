import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { logo } from "../assets/";
import { navItems, socialMedia } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [textColor, setTextColor] = useState("black"); // Estado para el color del texto

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isNavbarOpaque = currentScrollPos > 50;
      setNavbarBackground(isNavbarOpaque ? "#333333" : "transparent");
      setTextColor(isNavbarOpaque ? "white" : "black");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav
      className="w-full fixed top-0 left-0 right-0 z-50 py-0"
      style={{ backgroundColor: navbarBackground }}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex h-20 items-center flex-shrink-0">
            <img
              className="h-10 w-20 mr-2 md:h-28 md:w-60"
              src={logo}
              alt="logoalma"
            />
          </div>
          <ul
            className="hidden lg:flex space-x-12 "
            style={{
              color: textColor,
              fontSize: "0.8rem",
              letterSpacing: "2px",
              fontWeight: 600,
            }}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex">
            {socialMedia.map((social) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`cursor-pointer flex justify-around mx-1`}
                style={{
                  width: social.id === "social-media-2" ? "21px" : "21px",
                  height: social.id === "social-media-2" ? "21px" : "21px",
                }}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>

          <div className=" lg:hidden md:flex flex-col justify-end mr-2">
            <button onClick={toggleNavbar} className="mr-4">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul
              className="text-white"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "2px",
                fontWeight: 300,
              }}
            >
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex mt-4">
              {socialMedia.map((social, index) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                  onClick={() => window.open(social.link)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
