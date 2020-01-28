import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return <Form />;
  }
}

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: []
  };
  handleChange = event => {
    // console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);

    if (event.target.name == "firstName") {
      const textValue = event.target.value;
      this.setState({
        firstName: textValue
      });
    }
  };
  render() {
    return (
      <section>
        <article>
          <form>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input type="text" name="lastName" />
            <button
              type="submit"
              value={this.state.firstName}
              onChange={this.handleChange}
            >
              Submit
            </button>
          </form>
        </article>
        <article>
          <h1>people</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}
