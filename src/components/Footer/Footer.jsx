import "./Footer.css";
import github from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="social">
        <img src={github} width="28" />
        <img src={insta} width="28" />
        <img src={linkedin} width="28" />
      </div>
    </div>
  );
};

export default Footer;
