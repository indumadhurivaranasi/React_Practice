import React from "react";
import Person from "./Person";

function List() {
  const names = ["Innu", "Sindhu", "Divyanka"];
  const nameList = names.map((name, index) => <div key={index}>{name}</div>);

  const personList = [
    { id: 0, employeeName: "Indu", work: "Incture" },
    { id: 1, employeeName: "Divyanka", work: "Film Company" },
    { id: 2, employeeName: "Mary", work: "Accenture" },
  ];

  const personListComp = personList.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));

  return <div>{personListComp}</div>;
}

export default List;
