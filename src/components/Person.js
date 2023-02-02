import React from "react";
//destructuring of Props
function Person({ person ,key}) {
  return (
    <div>
      I am {person.employeeName} working at {person.work}
    </div>
  );
}

export default Person;
