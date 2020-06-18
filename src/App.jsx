import React, { Component } from "react";
import "./App.scss";
import Display from "./comp/display/display";
import Buttons from "./comp/buttons/buttons";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      state: "gray",
    };
  }

  check = () => {
    if (this.state.counter > 0) {
      this.setState({ state: "green" });
    } else if (this.state.counter < 0) {
      this.setState({ state: "red" });
    } else {
      this.setState({ state: "gray" });
    }
  };

  add = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter++,
      }),
      () => {
        this.check();
      }
    );
  };

  sub = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter--,
      }),
      () => {
        this.check();
      }
    );
  };

  reset = () => {
    this.setState({ counter: 0 }, () => {
      this.check();
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Counter</h2>
        <Display color={this.state.state} value={this.state.counter}></Display>
        <Buttons add={this.add} sub={this.sub} reset={this.reset}></Buttons>
      </div>
    );
  }
}
