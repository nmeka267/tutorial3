import React, { Component } from "react";
import "./App.css";
//uncontrolled inputs

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: []
  };
  handleChange = event => {
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);

    // if (event.target.name === "firstName") {
    //   const textValue = event.target.value;

    //   this.setState({
    //     firstName: textValue
    //   });
    // }
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if (firstName.length > 0 && lastName.length > 0) {
      const person = ` ${firstName} ${lastName} `;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: ""
      });
    }
  };

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type="submit">submit</button>
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

class App extends Component {
  render() {
    return <Form />;
  }
}

export default App;
