import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bar from "../../assets/bars.png";
import { Link } from "react-scroll";
import Barmenu from "../BarMenu/Barmenu";

const Header = () => {
  const [show, setShow] = useState("hidden");

  const toggleMenu = () => {
    show === "hidden" ? setShow("dropDown") : setShow("hidden");
  };

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="bar">
        <img src={bar} width="30" height="25" onClick={toggleMenu} />
      </div>
      <ul className="header_menu">
        <li>
          <Link to="home" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="whyus" smooth={true}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth={true}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true}>
            Testimonials
          </Link>
        </li>
      </ul>
      <div className={`${show}`}>
        <li>
          <Link to="home" smooth={true} onClick={() => setShow("hidden")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} onClick={() => setShow("hidden")}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="whyus" smooth={true} onClick={() => setShow("hidden")}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth={true} onClick={() => setShow("hidden")}>
            Plans
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            onClick={() => setShow("hidden")}
          >
            Testimonialss
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
