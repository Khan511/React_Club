import "./BarMenu.css";
import { Link } from "react-scroll";

const Barmenu = ({ toggleMenu }) => {
  return (
    <div className="header_bar">
      <ul>
        <li>
          <Link
            to="home"
            smooth={true}
            // span={true}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="programs"
            smooth={true}
            // span={true}
            onClick={toggleMenu}
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            to="whyus"
            smooth={true}
            // span={true}
            onClick={toggleMenu}
          >
            Why us
          </Link>
        </li>
        <li>
          <Link
            to="plans"
            smooth={true}
            // span={true}
            onClick={toggleMenu}
          >
            Plans
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            // span={true}
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Barmenu;
