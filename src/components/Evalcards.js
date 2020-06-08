import React, { Component } from "react";
import cardsDataset from "./cardsDataset";
import { Button } from "react-bootstrap";
import "./Evalcards.css";
class EvalCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      people: [],
    };
  }
  componentDidMount() {
    this.loadCards();
  }
  loadCards = () => {
    for (let i in cardsDataset) {
      let newArr = this.state.people;
      newArr.push(cardsDataset[i]);
      this.setState({
        people: newArr,
      });
    }
    console.log(this.state.people);
  };

  flop = () => {
    return (
      <div>
        {" "}
        {this.state.people.slice(1, 4).map((person, s) => {
          return <div key={s.id}>{person.cards}</div>;
        })}
      </div>
    );
  };
  turn = () => {
    return (
      <div>
        {" "}
        {this.state.people.slice(4, 5).map((person, s) => {
          return <div key={s.id}>{person.cards}</div>;
        })}
      </div>
    );
  };
  river = () => {
    return (
      <div>
        {" "}
        {this.state.people.slice(5, 6).map((person, s) => {
          return <div key={s.id}>{person.cards}</div>;
        })}
      </div>
    );
  };
  dealhands = () => {};

  render() {
    return (
      <div className="container">
        {" "}
        {this.state.people.slice(1, 4).map((person, s) => {
          return <div key={s.id}>{person.cards}</div>;
        })}
        <div>
          <Button size="md" variant="warning" onClick={this.flop}>
            Flop
          </Button>
          <br></br>
          <Button size="md" variant="success" onClick={this.turn}>
            Turn
          </Button>
          <Button size="md" variant="danger" onClick={this.river}>
            River
          </Button>
        </div>
      </div>
    );
  }
}
export default EvalCards;
