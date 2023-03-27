import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bar from "../../assets/bars.png";
import { Link } from "react-scroll";
import Barmenu from "../BarMenu/Barmenu";

const Header = () => {
  const [show, setShow] = useState(false);

  const mobieVersion = window.innerWidth <= 768 ? true : false;

  const toggleMenu = () => {
    setShow(!show);
  };
  console.log(show);

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      {show === false && mobieVersion == true ? (
        <div className="bar">
          <img src={bar} width="30" height="25" onClick={() => setShow(true)} />
        </div>
      ) : (
        <ul className="header_menu">
          <li>
            <Link
              to="home"
              smooth={true}
              // span={true}
              onClick={() => setShow(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
              // span={true}
              onClick={() => setShow(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="whyus"
              smooth={true}
              // span={true}
              onClick={() => setShow(false)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              smooth={true}
              // span={true}
              onClick={() => setShow(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              // span={true}
              onClick={() => setShow(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
