import React from "react";
import "../styles/slides.css";
import left from "/src/imgs/left.png";
import right from "/src/imgs/right.png";
import Slide1 from "/src/Components/slides/slide1";
import Slide2 from "/src/Components/slides/slide2";
import Slide3 from "/src/Components/slides/slide3";
import Slide4 from "/src/Components/slides/slide4";

class What extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };

    // this.nextClick = this.nextClick.bind(this);
    // this.prevClick = this.prevClick.bind(this);
  }

  nextClick = () => {
    console.log("next");
    if (this.state.activeIndex !== 3) {
      console.log("running");
      var preState = this.state.activeIndex;
      this.setState({ activeIndex: preState + 1 });
    }
  };

  prevClick = () => {
    if (this.state.activeIndex !== 0) {
      var preState = this.state.activeIndex;
      this.setState({ activeIndex: preState - 1 });
    }
  };

  render() {
    console.log(this.state.activeIndex);
    const index = this.state.activeIndex;
    let activeSlide;
    if (index === 0) {
      activeSlide = <Slide1 />;
    }
    if (index === 1) {
      activeSlide = <Slide2 />;
    }
    if (index === 2) {
      activeSlide = <Slide3 />;
    }
    if (index === 3) {
      activeSlide = <Slide4 />;
    }
    return (
      <div className="What">
        <div className="ToNext" onClick={this.nextClick}>
          <img className="RightArrow" src={right} alt="right arrow" />
          {activeSlide}
        </div>

        <div className="ToPrev" onClick={this.prevClick}>
          <img className="LeftArrow" src={left} alt="left arrow" />
          {activeSlide}
        </div>
      </div>
    );
  }
}

export default What;
