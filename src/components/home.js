import React, { Component } from "react";
import EvalCards from "./Evalcards";
import "./home.css";
import { Button } from "react-bootstrap";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Body">
        <div>
          <EvalCards />
         Raj Casino
        </div>
        <footer><span><small>Powered by PokerStars</small></span></footer>
      </div>
    );
  }
}
export default Home;
