import React from "react";
import "/src/Components/therapy/group.css";
import group from "/src/imgs/group.png";
import scroll from "/src/imgs/scroll.png";

class Group extends React.Component {
  toCBT = () => {
    var elmnt = document.getElementById("cbt");
    elmnt.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <div className="Group">
        <h1 className="g-title"> Support Group </h1>
        <h2 className="g-descript">
          Group Therapy is a set of psychosocial treatments that integrates
          evidence-based techniques of behavior modification, anger management,
          and cognitive-behavioral therapy programs to target oppositional
          behaviors and mood symptoms{" "}
        </h2>
        <img className="g-pic" src={group} alt="group therapy" />
        <img
          className="scroll-down-g"
          id="scroll-g"
          src={scroll}
          alt="pink scroll"
          onClick={this.toCBT}
        />
      </div>
    );
  }
}

export default Group;
