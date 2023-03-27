import "./Plans.css";
import rightArrow from "../../assets/rightArrow.png";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
const Plans = () => {
  return (
    <div className="plans" id="plans">
      <h1 className="font">
        <span className="stroke-text">READY TO START </span>
        YOUR JOURNY <span className="stroke-text"> NOW WITH US</span>
      </h1>
      <div className="plans-info">
        {plansData.map((data, index) => {
          const { icon, name, price, features } = data;
          return (
            <div className="plan" key={index}>
              {/*<div className="blur plan-blur"></*div>*/}
              <p className="icon"> {icon}</p>
              <h2>{name}</h2>
              <h1>$ {price}</h1>
              {features.map((feature, index) => {
                return (
                  <p className="info" key={index}>
                    <img src={whiteTick} /> {feature}
                  </p>
                );
              })}
              <p className="see_more">
                See more benifits <img src={rightArrow} />
              </p>

              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
