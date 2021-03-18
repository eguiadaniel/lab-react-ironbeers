import React from 'react';
import { Link } from 'react-router-dom';

function Featured(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h2><Link to={props.link}>
      {props.title}
      </Link>
      </h2>

      <p>{props.message}</p>
    </div>
  );
}

export default Featured;
