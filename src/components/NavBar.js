import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <nav className='nav'>
        <Link to="/">Wiki Countries</Link>
      </nav>
  );
}

export default NavBar;
