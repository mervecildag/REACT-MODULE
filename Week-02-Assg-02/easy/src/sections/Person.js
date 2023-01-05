import React from "react";
import Title from "../components/Title";

function Person({ user }) {
  return (
    <div>
      {Title({title:"PERSON"})}
      <div>
        <img src={user.avatar} alt=""></img>
        <p>First name: {user.first_name}</p>
        <p>Last name: {user.last_name}</p>
        <p>Address: {user.address}</p>
        <p>Gender: {user.gender}</p>
        <p>Email: {user.email}</p>

      </div>
    </div>
  );
}

export default Person;
