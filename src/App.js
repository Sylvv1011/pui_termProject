import React from "react";
import "./adhd.css";
import girlimg from "./imgs/main_1.png";
import MenuList from "./Components/menu";
import What from "/src/Components/what";
import { Text, StyleSheet } from "react-native";
import DataSheet from "./Components/data";
import Meds from "/src/Components/meds";
import Medication3 from "/src/Components/medications/medication3";
import Overview from "/src/Components/therapy/overview";
import Group from "/src/Components/therapy/group";
import Cbt from "/src/Components/therapy/cbt";

// import Plx from "react-plx";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="title-elems">
            {/*  Organize Svg elements: The words on first page */}
            <p className="big-title">ADHD</p>
            <p className="subtitle">Attention-deficit/hyperactivity Disorder</p>
            <img className="imgGirl" src={girlimg} alt="girlimg" />
            <div className="sections">
              <MenuList />
            </div>
          </div>
        </div>

        <div className="Storyline" id="story">
          <What />
        </div>

        <div className="DataFacts" id="data">
          <DataSheet />
        </div>

        <div className="Medis" id="med">
          <Meds />
        </div>

        <div className="Overviews" id="overview">
          <Overview />
        </div>

        <div className="Groups" id="group">
          <Group />
        </div>

        <div className="CBT" id="cbt">
          <Cbt />
        </div>
      </div>
    );
  }
}

export default App;
