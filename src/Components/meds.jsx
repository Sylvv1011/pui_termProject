import React from "react";
import ellipse1 from "/src/imgs/ellipse1.png";
import "/src/styles/medications.css";
import Medication1 from "/src/Components/medications/medication1";
import Medication2 from "/src/Components/medications/medication2";
import Medication3 from "/src/Components/medications/medication3";
import Medication4 from "/src/Components/medications/medication4";

class Meds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      color1: "white",
      color2: "#D1B5B5",
      color3: "#D1B5B5",
      color4: "#D1B5B5"
    };
  }

  oneClick = () => {
    console.log(this.state);
    if (this.state.activeIndex !== 0) {
      this.setState({
        activeIndex: 0,
        color1: "white",
        color2: "#D1B5B5",
        color3: "#D1B5B5",
        color4: "#D1B5B5"
      });
    }
  };

  twoClick = () => {
    console.log(this.state);
    if (this.state.activeIndex !== 1) {
      console.log("twoclick");
      this.setState({
        activeIndex: 1,
        color1: "#D1B5B5",
        color2: "white",
        color3: "#D1B5B5",
        color4: "#D1B5B5"
      });
    }
  };

  threeClick = () => {
    if (this.state.activeIndex !== 2) {
      this.setState({
        activeIndex: 2,
        color1: "#D1B5B5",
        color2: "#D1B5B5",
        color3: "white",
        color4: "#D1B5B5"
      });
    }
  };

  fourClick = () => {
    if (this.state.activeIndex !== 3) {
      this.setState({
        activeIndex: 3,
        color1: "#D1B5B5",
        color2: "#D1B5B5",
        color3: "#D1B5B5",
        color4: "white"
      });
    }
  };

  render() {
    const index = this.state.activeIndex;
    let activeSlide;
    if (index === 0) {
      activeSlide = <Medication1 />;
    }
    if (index === 1) {
      activeSlide = <Medication2 />;
    }
    if (index === 2) {
      activeSlide = <Medication3 />;
    }
    if (index === 3) {
      activeSlide = <Medication4 />;
    }
    return (
      <div className="Medications">
        <div className="med-menu">
          <img
            className="elip-m"
            src={ellipse1}
            alt="pink ellipse"
            width={400}
          />

          <ul className="four">
            <li className="menu-items" onClick={this.oneClick}>
              <h4 style={{ color: this.state.color1 }}>Why do I need it?</h4>
            </li>

            <li className="menu-items" onClick={this.twoClick}>
              <h4 style={{ color: this.state.color2 }}>Stimulants</h4>
            </li>
            <li className="menu-items" onClick={this.threeClick}>
              <h4 style={{ color: this.state.color3 }}>Non-stimulants</h4>
            </li>

            <li className="menu-items" onClick={this.fourClick}>
              <h4 style={{ color: this.state.color4 }}>Antidepressents</h4>
            </li>
          </ul>
        </div>

        {activeSlide}
      </div>
    );
  }
}

export default Meds;
