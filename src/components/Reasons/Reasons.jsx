import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import adidas from "../../assets/adidas.png";
import NB from "../../assets/nb.png";
import nike from "../../assets/nike.png";

const Reasons = () => {
  return (
    <div className="reasons" id="whyus">
      <div className="left">
        <img src={image1} alt="Training" />
        <img src={image2} alt="Training" />
        <img src={image3} alt="Training" />
        <img src={image4} alt="Training" />
      </div>

      <div className="right">
        <h4>SOME REASONS</h4>
        <h1>
          <span className="stroke-text">WHY </span>
          CHOOSE US?
        </h1>
        <h2>
          <span>
            <img src={tick} />
          </span>
          OVER 140+ EXPERT COACHES
        </h2>
        <h2>
          <span>
            <img src={tick} />
          </span>
          TRAIN SMARTER AND FASTER THAN BEFORE
        </h2>
        <h2>
          <span>
            <img src={tick} />
          </span>
          1 FREE PROGRAM FOR NEW MEMBER{" "}
        </h2>
        <h2>
          <span>
            <img src={tick} />
          </span>
          RELIABLE PARTNERS
        </h2>
        <div className="partners">
          <h4>OUR PARTNERS</h4>
          <div className="marks">
            <img src={NB} alt="Training" />
            <img src={adidas} alt="Training" />
            <img src={nike} alt="Training" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
