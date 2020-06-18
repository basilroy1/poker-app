import React, { Component } from "react";
import cardsDataset from "./cardsDataset";
import { Button } from "react-bootstrap";
import "./Evalcards.css";
import Timer from "react-compound-timer";
class EvalCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      flopFlag: false,
      turnFlag: false,
      time: 0,
      riverFlag: false,
      flopDisable: false,
      turnDisable: true,
      riverDisable: true,
    };
  }
  componentDidMount() {
    this.loadCards();
    this.setState({ time: 30000 });
  }
  loadCards = () => {
    for (let i in cardsDataset) {
      let newArr = this.state.people;
      newArr.push(cardsDataset[i]);
      this.setState({
        people: newArr,
      });
    }
  };

  shuffleFisherYates(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }

  flop = () => {
    this.setState({ flopFlag: true, turnDisable: false });
  };
  turn = () => {
    this.setState({ turnFlag: true, riverDisable: false });
  };
  river = () => {
    this.setState({ riverFlag: true });
  };
  dealhands = (cardsDataset) => {
    this.setState({ turnDisable: true, riverDisable: true });
    this.shuffleFisherYates(cardsDataset);
  };

  render() {
    //  var time=30000;
    return (
      <div>
        <div className="clock">
          <Timer direction="backward" initialTime={this.state.time}>
            {this.state.time <= 20000 ? (
              <span style={{ color: "red" }} />
            ) : (
              <span style={{ color: "blue" }} />
            )}
            <Timer.Seconds /> Second
          </Timer>
        </div>
        <div className="pokerButtons">
          <Button
            size="md"
            variant="warning"
            disabled={this.state.flopDisable}
            onClick={this.flop}
          >
            Flop
          </Button>
          <Button
            size="md"
            variant="success"
            disabled={this.state.turnDisable}
            onClick={this.turn}
          >
            Turn
          </Button>
          <Button
            size="md"
            variant="danger"
            disabled={this.state.riverDisable}
            onClick={this.river}
          >
            River
          </Button>
          <br />
          <br></br>
          <Button size="md" variant="info" onClick={this.dealhands}>
            Deal New Hands
          </Button>
        </div>
        <br />
        <div className="container">
          {this.state.flopFlag ? (
            <div className="container">
              {" "}
              {this.state.people.slice(1, 4).map((person, s) => {
                return <div key={s.id}>{person.cards}</div>;
              })}
            </div>
          ) : null}
          {this.state.turnFlag ? (
            <div className="container">
              {" "}
              {this.state.people.slice(4, 5).map((person, s) => {
                return <div key={s.id}>{person.cards}</div>;
              })}
            </div>
          ) : null}
          {this.state.riverFlag ? (
            <div className="container">
              {" "}
              {this.state.people.slice(5, 6).map((person, s) => {
                return <div key={s.id}>{person.cards}</div>;
              })}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default EvalCards;
