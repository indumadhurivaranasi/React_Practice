import React, { useState } from "react";

function HookStateObj() {
  const [name, setName] = useState({ firstName: "", lastname: "" });
  const [items, setItems] = useState([{id:0,value:5}]);

  const addNewItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  return (
    <div>
      <form>
        <input
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        ></input>
        <input
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        ></input>
        <h4>Your First Name : {name.firstName}</h4>
        <h4>Your Last Name : {name.lastName}</h4>
        <button onClick={addNewItem}>Add Item</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default HookStateObj;
