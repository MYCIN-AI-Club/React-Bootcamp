import React from "react";

const Navbar = (props) => {
  return (
    <h2 className="navbar bg-success text-white px-4">
      Total counters:
      {props.counters.filter((counter) => counter.count > 0).length}
    </h2>
  );
};

export default Navbar;
