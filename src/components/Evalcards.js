import React, { Component } from "react";
import cardsDataset from "./cardsDataset";
class EvalCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null,
      count: 0,
      people: [],
    };
  }
  componentDidMount() {
    this.loadCards();
  }
  loadCards = () => {
    for (var i = 0; i < cardsDataset.length; i++) {
      let newArr = this.state.people;
      newArr.push(cardsDataset[i]);
      this.setState({
        people: newArr,
      });
    }
  };

  flop = () => {};
  turn = () => {};
  river = () => {};
  dealhands = () => {};

  render() {
    return (
      <div>
        {" "}
        {this.state.people.map((person, s) => {
          return <div key={s}>{person.cards}</div>;
        })}
        ;
      </div>
    );
  }
}
export default EvalCards;
