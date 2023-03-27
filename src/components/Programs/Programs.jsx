import "./Programs.css";
import rightArrow from "../../assets/rightArrow.png";
import { programsData } from "../../data/programsData";

const Programs = () => {
  return (
    <div className="trainings-programs" id="programs">
      <div className="heading">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      <div className="training-types">
        {programsData.map((program, index) => {
          const { image, heading, details } = program;
          return (
            <div className="strength_training box" key={index}>
              {image}
              <h4>{heading}</h4>
              <p>{details}</p>
              <div className="join_now">
                <p>Join Now</p>
                <img width={18} height={15} src={rightArrow} alt="leftArrow" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
