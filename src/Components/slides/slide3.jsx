import React, { Component } from "react";
import "/src/styles/slides.css";
import left from "/src/imgs/left.png";
import right from "/src/imgs/right.png";
import cloud1 from "/src/imgs/cloud1.png";
import cloud2 from "/src/imgs/cloud2.png";
import cloud3 from "/src/imgs/cloud3.png";
import cloud4 from "/src/imgs/cloud4.png";
import cloud5 from "/src/imgs/cloud5.png";
import title3 from "/src/imgs/s3Title.png";

class Slide3 extends Component {
  render() {
    return (
      <div className="Slide3">
        <img id="s3title" src={title3} alt="title" />
        <img id="cloud1" src={cloud1} alt="cloud 1"></img>
        <img id="cloud2" src={cloud2} alt="cloud 2"></img>
        <img id="cloud3" src={cloud3} alt="cloud 3"></img>
        <img id="cloud4" src={cloud4} alt="cloud 4"></img>
        <img id="cloud5" src={cloud5} alt="cloud 5"></img>

        <p className="Discript" id="discript2">
          However, having the above symptoms{" "}
          <span style={{ color: "#892A2A", fontWeight: "bold" }}>
            does not necessarily mean you possess ADHD.
          </span>
          <span>
            {" "}
            If you would like to do a diagnosis, please refer to the{" "}
          </span>
          <span style={{ color: "#892A2A", fontWeight: "bold" }}>
            DSM-5 Criteria
          </span>
          <span> for ADHD. </span>
        </p>
      </div>
    );
  }
}

export default Slide3;
