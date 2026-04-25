import React from 'react';

const Navbar = ({ adjective, getAdjective }) => {
    console.log("Navbar component rendered");
  return (
    <div>
      I am the {adjective} Navbar component.
      <button onClick={() => { getAdjective() }}>Change Adjective</button>
    </div>
  );
}

export default Navbar;
