import React from "react";
import "../styles/data.css";
import dRect from "/src/imgs/data_rect.png";
import child1 from "/src/imgs/child1.png";
import child2 from "/src/imgs/child2.png";
import child3 from "/src/imgs/child3.png";
import text3 from "/src/imgs/text3.png";
import female from "/src/imgs/female.png";
import male from "/src/imgs/male.png";
import threex from "/src/imgs/threex.png";
import house from "/src/imgs/house.png";
import fourx from "/src/imgs/fourx.png";
import hist1 from "/src/imgs/hist1.png";
import hist2 from "/src/imgs/hist2.png";
import venn from "/src/imgs/Venn.png";
import moneybag from "/src/imgs/moneybag.png";
import percent from "/src/imgs/42pc.png";

class DataSheet extends React.Component {
  render() {
    return (
      <div className="DataSheet">
        <div className="title-d">
          <h2>ADHD Data Facts</h2>
          <img className="rect" src={dRect} alt="title rectangle" />
        </div>

        <div className="in-children">
          <h2 className="c-title">ADHD in Children</h2>
          <img className="Child1" src={child1} alt="2-5 years" width={130} />
          <img className="Child2" src={child2} alt="6-11 years" width={130} />
          <img className="Child3" src={child3} alt="12-17 years" width={160} />
          <img className="Text3" src={text3} alt="12-17 years" width={80} />
        </div>

        <div className="m-and-f">
          <h2 className="c-title">Male vs. Female</h2>
          <img className="Female" src={female} alt="female" width={60} />
          <img className="Male" src={male} alt="male" width={52} />
          <img className="Threex" src={threex} alt="3 times" />
        </div>

        <div className="household">
          <h2 className="c-title">Households</h2>
          <img className="House" src={house} alt="female" />
          <img className="Fourx" src={fourx} alt="4 times" />
        </div>

        <div className="children-tmt">
          <h2 className="c-title">ADHD Treatment for Children</h2>
          <img className="Hist1" src={hist1} alt="Histogram1" />
        </div>

        <div className="college-tmt">
          <h2 className="c-title">ADHD Treatment for College Student</h2>
          <img className="Hist2" src={hist2} alt="Histogram2" />
        </div>

        <div className="Others">
          <h2 className="c-title">ADHD and Other Disorders</h2>
          <img className="Venn" src={venn} alt="Venn diagram" />
        </div>

        <div className="Effects">
          <h2 className="c-title">Effect on Employment</h2>
          <img className="Money" src={moneybag} alt="Money icon" />
          <p
            className="Salary"
            style={{ color: "black", fontWeight: "bold", fontSize: "28px" }}
          >
            Average Salary
          </p>
          <p
            className="s-num"
            style={{ color: "black", fontWeight: "bold", fontSize: "35px" }}
          >
            $8,900 - $15,400
          </p>
          <img className="Percent" src={percent} alt="42 percent" />
          <p
            className="sal-d"
            style={{ color: "black", fontWeight: "normal", fontSize: "20px" }}
          >
            less likely to be employed full time, compared with adults without
            ADHD
          </p>
        </div>
      </div>
    );
  }
}

export default DataSheet;
