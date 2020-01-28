import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

const Person = ({ img, name, age, info }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age: {age}</h4>
      <h4>info: {info}</h4>
    </article>
  );
};
Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
  name: "Meka default",
  age: 27,
  info: "default info about person"
};
class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        name: "john",
        age: 24
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        name: "bob",
        age: 27
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        name: "Naveen Meka",
        age: 27,
        info: "some info about peter"
      }
    ]
  };
  render() {
    return (
      <section>
        {this.state.people.map(person => (
          <Person
            key={person.id}
            img={person.img}
            name={person.name}
            age={person.age}
            info={person.info}
          />
        ))}
      </section>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <section>
        <PersonList />
      </section>
    );
  }
}
