import React, { Component } from "react";
import cardsDataset from "./cardsDataset";
class EvalCards extends Component {
  componentDidMount() {
    this.flop();
  }
  flop = () => {
    var i,
      res = 0;
    for (i in cardsDataset) {
      res = cardsDataset[i];
    }
    console.log(res);
  };
  turn = () => {};
  river = () => {};
  dealhands = () => {};
  render() {
    return <div>Hel,oo poker</div>;
  }
}
export default EvalCards;
