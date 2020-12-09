import React from "react";
import "/src/Components/therapy/cbt.css";
import cbt from "/src/imgs/cbt.png";

class Cbt extends React.Component {
  render() {
    return (
      <div className="Cbt">
        <h1 className="cbt-title"> Cognitive Behavioral Therapy </h1>
        <h2 className="cbt-descript">
          Cognitive behavioral therapy (CBT) is a short-term, goal-oriented form
          of psychotherapy that aims to change these negative patterns of
          thinking and change the way a patient feels about himself/herself,
          his/her abilities, and his/her future. We can consider it brain
          training for ADHD.
        </h2>
        <img className="cbt-pic" src={cbt} alt="cognitive behavioral therapy" />
      </div>
    );
  }
}

export default Cbt;
