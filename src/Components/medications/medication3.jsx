import React from "react";
import ellipse1 from "/src/imgs/ellipse1.png";
import "/src/styles/medications.css";
import strattera from "/src/imgs/strattera.jpg";

class Medication3 extends React.Component {
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
      Display = <Med />;
    }

    if (index === 1) {
      Display = <SEffects />;
    }

    return (
      <div className="Med3">
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

class Med extends React.Component {
  render() {
    return (
      <p className="Stimulants" id="stimulant1">
        In most cases, non-stimulant medications are considered{" "}
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          when stimulants haven’t worked
        </span>
        <span> or have caused intolerable side effects. </span>
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          <br />
          <br />
          Strattera,
        </span>
        <span> also known by its generic name </span>
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          atomoxetine,
        </span>
        <span> is the </span>
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          only non-stimulant medication approved by the FDA
        </span>
        <span>
          {" "}
          for ADHD treatment. Unlike stimulants, which affect dopamine,{" "}
        </span>
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          Strattera boosts the levels of norepinephrine,
        </span>
        <span> a different brain chemical. </span>
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
            <p>Sleepiness</p>
          </li>
          <li>
            <p>Headaches</p>
          </li>
          <li>
            <p>Dizziness</p>
          </li>
          <li>
            <p>Abdominal pain or upset stomach</p>
          </li>
          <li>
            <p>Nausea or vomiting</p>
          </li>
          <li>
            <p>Mood swings</p>
          </li>
          <li>
            <p>...</p>
          </li>
        </ul>
        <img className="med-pic" src={strattera} alt="strattera" />
      </div>
    );
  }
}

export default Medication3;
