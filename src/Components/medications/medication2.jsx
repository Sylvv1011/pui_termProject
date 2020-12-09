import React from "react";
import ellipse1 from "/src/imgs/ellipse1.png";
import "/src/styles/medications.css";
import adderall from "/src/imgs/adderall.jpg";

class Medication2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, color1: "#EA8223", color2: "#F0C077" };
  }

  medClick = () => {
    if (this.state.activeIndex !== 0) {
      this.setState({ activeIndex: 0, color1: "#EA8223", color2: "#F0C077" });
    }
  };

  effClick = () => {
    if (this.state.activeIndex !== 1) {
      this.setState({ activeIndex: 1, color1: "#F0C077", color2: "#EA8223" });
    }
  };

  render() {
    const index = this.state.activeIndex;
    let Display;
    if (index === 0) {
      Display = <Stimulants />;
    }

    if (index === 1) {
      Display = <SEffects />;
    }

    return (
      <div className="Med2">
        <div
          className="m-title"
          style={{ fontSize: "65px", color: "#CF6767", fontWeight: "bold" }}
        >
          Medications
        </div>
        <div className="med-menu">
          <img className="elip" src={ellipse1} alt="pink ellipse" width={400} />
        </div>
        <div className="Frame">
          <div id="rectangle1"></div>
          <div id="rectangle2"></div>

          <div className="toMed" onClick={this.medClick}>
            <div id="rectangle3" style={{ backgroundColor: this.state.color1 }}>
              <h2 className="tabs" id="what">
                What is it?
              </h2>
            </div>

            <div className="display">{Display}</div>
          </div>

          <div className="toEffect" onClick={this.effClick}>
            <div id="rectangle4" style={{ backgroundColor: this.state.color2 }}>
              <h2 className="tabs" id="effect">
                Side Effects
              </h2>
            </div>

            <div className="display">{Display}</div>
          </div>
        </div>
      </div>
    );
  }
}

class Stimulants extends React.Component {
  render() {
    return (
      <p className="Stimulants" id="stimulant1">
        Stimulants are the{" "}
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          most common
        </span>
        <span>
          {" "}
          type of medication prescribed for attention deficit disorder. They
          have the longest track record for treating ADHD and the most research
          to back up their effectiveness.{" "}
        </span>
        <span>
          {" "}
          <br />
          <br />
          The stimulant class of medication includes widely used drugs such as{" "}
        </span>
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          Ritalin, Adderall, and Dexedrine
        </span>
      </p>
    );
  }
}

class SEffects extends React.Component {
  render() {
    return (
      <div>
        <p className="e-title">Common Side Effects include: </p>
        <ul className="e-list">
          <li>
            <p>Feeling restless and jittery</p>
          </li>
          <li>
            <p>Difficulty sleeping</p>
          </li>
          <li>
            <p>Loss of appetite</p>
          </li>
          <li>
            <p>Headaches</p>
          </li>
          <li>
            <p>Upset stomach</p>
          </li>
          <li>
            <p>Irritability, mood swings</p>
          </li>
          <li>
            <p>Depression</p>
          </li>
          <li>
            <p>...</p>
          </li>
        </ul>
        <img className="med-pic" src={adderall} alt="adderall" />
      </div>
    );
  }
}

export default Medication2;
