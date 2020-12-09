import React, { Component } from "react";
import "/src/styles/slides.css";
import left from "/src/imgs/left.png";
import right from "/src/imgs/right.png";
import foot1 from "/src/imgs/foot1.png";
import foot2 from "/src/imgs/foot2.png";
import foot3 from "/src/imgs/foot3.png";
import foot4 from "/src/imgs/foot4.png";
import adhdGirl from "/src/imgs/adhd_girl.jpg";
import adhdWoman from "/src/imgs/adhdWoman.png";

class Slide2 extends Component {
  render() {
    return (
      <div className="Slide2">
        <img id="adhd-girl" src={adhdGirl} alt="adhd girl" />
        <img id="foot1" src={foot1} alt="foot 1"></img>
        <img id="foot2" src={foot2} alt="foot 2"></img>
        <img id="foot3" src={foot3} alt="foot 3"></img>
        <img id="foot4" src={foot4} alt="foot 4"></img>
        <img id="adhd-woman" src={adhdWoman} alt="adhd woman" />

        <p className="Discript" id="discript2">
          ADHD often begins in{" "}
          <span style={{ color: "#892A2A", fontWeight: "bold" }}>
            childhood
          </span>
          <span> and can persist into </span>
          <span style={{ color: "#892A2A", fontWeight: "bold" }}>
            adulthood.
          </span>
          <span> It may contribute to </span>
          <span style={{ color: "#892A2A", fontWeight: "bold" }}>
            low self-esteem, troubled relationships,
          </span>
          <span> and </span>
          <span style={{ color: "#892A2A", fontWeight: "bold" }}>
            difficulty at school or work.
          </span>
        </p>
      </div>
    );
  }
}

export default Slide2;
