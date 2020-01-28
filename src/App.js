import React, { Component } from "react";
import "./App.css";
//uncontrolled inputs

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.refs.myName;
    console.log(name);
    const nameValue = name.value;
    const email = this.email.value;
    const text = this.refs.myText;
    const textValue = text.textContent;
    text.style.color = "red";
    console.log(nameValue, email, textValue);
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myName" />
          <input type="email" ref={apple => (this.email = apple)} />
          <button
            type="
          submit"
          >
            submit
          </button>
          <p ref="myText">Hello uncontrolled inputss</p>
        </form>
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
