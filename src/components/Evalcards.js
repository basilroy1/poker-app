import React, { Component } from "react";
import cardsDataset from "./cardsDataset";
import { Button } from "react-bootstrap";
import "./Evalcards.css";
class EvalCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      people: [],
      flopFlag: false,
      turnFlag: false,
      riverFlag: false,
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
    // console.log(this.state.people);
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
    this.setState({ flopFlag: true });
  };
  turn = () => {
    this.setState({ turnFlag: true });
  };
  river = () => {
    this.setState({ riverFlag: true });
  };
  dealhands = () => {};
  /*onload = function () {
    var thirtySec = 30,
      display = document.querySelector("#time");
    startTimer(thirtySec, display);
  };*/

  startTimer(duration, display) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <Button size="md" variant="warning" onClick={this.flop}>
          Flop
        </Button>

        <Button size="md" variant="success" onClick={this.turn}>
          Turn
        </Button>
        <Button size="md" variant="danger" onClick={this.river}>
          River
        </Button>
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
