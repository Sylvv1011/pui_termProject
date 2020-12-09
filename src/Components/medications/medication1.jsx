import React from "react";
import "/src/styles/medications.css";
import dopamine from "/src/imgs/dopamine.png";
import ellipse1 from "/src/imgs/ellipse1.png";

class Medication1 extends React.Component {
  render() {
    return (
      <div className="Med1">
        <div
          className="m-title"
          style={{ fontSize: "65px", color: "#CF6767", fontWeight: "bold" }}
        >
          Medications
        </div>

        <div className="med-menu">
          <img className="elip" src={ellipse1} alt="pink ellipse" width={400} />
        </div>

        <img
          className="Dopamine"
          src={dopamine}
          alt="dopamine pic"
          width={450}
        />

        <div className="Med-discript">
          <p id="medwords1">
            ADHDers are believed to have a lower than normal dopamine level in
            their brain.{" "}
            <span style={{ color: "#892A2A", fontWeight: "bold" }}>
              Dopamine
            </span>
            <span> is a </span>
            <span style={{ color: "#892A2A", fontWeight: "bold" }}>
              neurotransmitter
            </span>
            <span> associated with </span>
            <span style={{ color: "#892A2A", fontWeight: "bold" }}>
              motivation, pleasure, attention, and movement.
            </span>
          </p>

          <br />
          <br />
          <p id="medwords2">
            ADHD medications work by{" "}
            <span style={{ color: "#892A2A", fontWeight: "bold" }}>
              increasing dopamine levels
            </span>
            <span> to boost concentration and focus while </span>
            <span style={{ color: "#892A2A", fontWeight: "bold" }}>
              reducing hyperactive and impulsive behaviors.
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Medication1;
