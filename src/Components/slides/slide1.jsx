import React, { Component } from "react";
import brain from "/src/imgs/adhdBrain.jpg";
import "/src/styles/slides.css";
import right from "/src/imgs/right.png";

class Slide1 extends Component {
  render() {
    return (
      <div className="Slide1">
        <img id="adhd-brain" src={brain} alt="adhd brain" width={800} />

        <p className="Discript" id="discript1">
          ADHD is a chronic condition including{" "}
          <span style={{ color: "#892A2A", fontWeight: "bold" }}>
            attention difficulty, hyperactivity,
          </span>
          <span> and </span>
          <span style={{ color: "#892A2A", fontWeight: "bold" }}>
            impulsiveness.
          </span>
        </p>

        {/* <img className="RightArrow" src={right} alt="right arrow" /> */}
      </div>
    );
  }
}

export default Slide1;
