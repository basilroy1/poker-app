import React, { Component } from "react";
import EvalCards from "./Evalcards";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <EvalCards />
          PokerStars 2.0
        </div>
      </div>
    );
  }
}
export default Home;
