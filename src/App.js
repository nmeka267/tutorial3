import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

const Person = ({ person: { img, name, age, info } }) => {
  //const { img, name, age, info } = props.person;
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age: {age}</h4>
      <h4>info: {info || "default ifo about the person"}</h4>
    </article>
  );
};
//person is a object and getting values from person obj
Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired
  })
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
          <Person key={person.id} person={person} />
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
