import React from "react";
import "../styles/menu.css";
import square from "/src/imgs/square.png";

class MenuList extends React.Component {
  toWhat = () => {
    var elmnt = document.getElementById("story");
    elmnt.scrollIntoView({ behavior: "smooth" });
  };

  toData = () => {
    var elmnt = document.getElementById("data");
    elmnt.scrollIntoView({ behavior: "smooth" });
  };

  toMed = () => {
    var elmnt = document.getElementById("med");
    elmnt.scrollIntoView({ behavior: "smooth" });
  };

  toOverview = () => {
    var elmnt = document.getElementById("overview");
    elmnt.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div id="l-sections" className="list sections">
        <ul
          className="list-items"
          id="list-bulls"
          style={{ listStyleImage: { square } }}
        >
          <li className="item">
            <img className="sq-bullet" src={square} alt="square" />
            <p className="bullets" onClick={this.toWhat}>
              What is ADHD?
            </p>
          </li>

          <li className="item">
            <img className="sq-bullet" src={square} alt="square" />
            <p className="bullets" onClick={this.toData}>
              Data About ADHD
            </p>
          </li>

          <li className="item">
            <img className="sq-bullet" src={square} alt="square" />
            <p className="bullets" onClick={this.toMed}>
              Medications
            </p>
          </li>

          <li className="item">
            <img className="sq-bullet" src={square} alt="square" />
            <p className="bullets" onClick={this.toOverview}>
              Treatments
            </p>
          </li>

          <li className="item">
            <img className="sq-bullet" src={square} alt="square" />
            <p className="bullets">Learn About My Experience</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuList;

// class MenuList extends React.Component {
//   render() {
//     return (
//       <div id="l-sections" className="list sections">
//         <div className="list-items" id="what">
//           <img src={square} alt="sq" height={20} width={20} />
//           <h1>What is ADHD?</h1>
//         </div>

//         <div className="list-items" id="Data">
//           <h1>Data About ADHD</h1>
//         </div>

//         <div className="list-items" id="MT">
//           <h1>Medication/Treatment</h1>
//         </div>

//         <div className="list-items" id="Me">
//           <h1>Learn About My Experience</h1>
//         </div>
//       </div>
//     );
//   }
// }
