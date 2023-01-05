import React from "react";
import Title from "../components/Title";
import {person} from "../data/person"

function Person({ user }) {
  return (
    <div>
      {Title({title:"person"})}
      <div>
        <img src={person.avatar} alt=""></img>
        <p>First name: {person.first_name}</p>
        <p>Last name: {person.last_name}</p>
        <p>Address: {person.address}</p>
        <p>Gender: {person.gender}</p>
        <p>Email: {person.email}</p>

      </div>
    </div>
  );
}

export default Person;
