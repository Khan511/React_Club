import "./Testimonial.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";

const Testimonial = () => {
  const [person, setPerson] = useState([0]);
  let counter = 0;

  // const nextPerson = () => {
  //   setPerson((prev) => {
  //     let newPerson = Number(prev + 1);

  //     if (newPerson > testimonialsData.length - 1) {
  //       newPerson = 0;
  //     }
  //     return newPerson;
  //   });
  // };
  const prevPerson = () => {
    setPerson((prev) => {
      let newPerson = Number(prev - 1);

      if (newPerson < 0) {
        newPerson = testimonialsData.length - 1;
      }
      return newPerson;
    });
  };

  return (
    <div className="testimonials" id="testimonials">
      <div className="left_t">
        <h3>TESTIMONIALS</h3>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        <span>{testimonialsData[person].review} </span>
        <span>
          <span style={{ color: "orange" }}>
            {testimonialsData[person].name}
          </span>{" "}
          - {testimonialsData[person].status}
        </span>
      </div>
      <div className="right_t">
        <div className="arrow">
          <img src={leftArrow} width="25" height="20" onClick={prevPerson} />
          <img
            src={rightArrow}
            width="25"
            height="20"
            onClick={() => {
              person === testimonialsData.length - 1
                ? setPerson(0)
                : setPerson((prev) => {
                    return Number(prev + 1);
                  });
            }}
          />
        </div>
        <img src={testimonialsData[person].image} />
        <div className="border"></div>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Testimonial;
