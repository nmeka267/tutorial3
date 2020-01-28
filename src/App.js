import React, { Component } from "react";
import "./App.css";
import { readdirSync } from "fs";
//uncontrolled inputs

class Counter extends Component {
  state = {
    count: 0
  };
  handleIncrease = () => {
    console.log("called forst", this.state.count);
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 2
    });
    console.log("called second:", this.state.count);
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button type="button" onClick={this.handleIncrease}>
            increase
          </button>
          <span style={{ margin: "1rem" }}>Count{this.state.count}</span>
          <button type="button">decrease</button>
        </div>
      </React.Fragment>
    );
  }
}
class App extends Component {
  render() {
    return <Counter amount="2" />;
  }
}

export default App;
