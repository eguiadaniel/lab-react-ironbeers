import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <span>
        <Link to="/">Home</Link>
      </span>
    </div>
  );
}

export default Navbar;
