import React from "react";
import ellipse1 from "/src/imgs/ellipse1.png";
import "/src/styles/medications.css";
import wellbutrin from "/src/imgs/wellbutrin.png";

class Medication4 extends React.Component {
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
      <div className="Med4">
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
        For people suffering from{" "}
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          both ADHD and depression,
        </span>
        <span>
          {" "}
          certain antidepressants, which target multiple neurotransmitters in
          the brain, may be prescribed.{" "}
        </span>
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          <br />
          <br />
          Wellbutrin,
        </span>
        <span> also known by the generic name </span>
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>bupropion,</span>
        <span> is most widely used. </span>
        <span style={{ color: "#892A2A", fontWeight: "bold" }}>
          Wellbutrin targets both norepinephrine and dopamine.
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
            <p>Trouble Sleeping</p>
          </li>
          <li>
            <p>Nausea</p>
          </li>
          <li>
            <p>Constipation </p>
          </li>
          <li>
            <p>Dry Mouth</p>
          </li>
          <li>
            <p>Sweating</p>
          </li>
          <li>
            <p>Mood swings</p>
          </li>
          <li>
            <p>Changes in sex drive</p>
          </li>
          <li>
            <p>...</p>
          </li>
        </ul>
        <img className="med-pic" id="wb" src={wellbutrin} alt="wellbutrin" />
      </div>
    );
  }
}

export default Medication4;
