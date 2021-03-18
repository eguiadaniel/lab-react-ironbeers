import React from 'react';
import Featured from './../components/Featured';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
     
      <h2>Home</h2>
      <Featured
        link="/beers"
        image="/assets/beers.png"
        title="All Beers"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
        consequatur nemo rem quis dolores minima maiores inventore quaerat quasi
        nisi laudantium ad corporis alias optio tenetur cumque id, doloribus
        error."
      />
      <Featured
        link="/random-beer"
        image="/assets/random-beer.png"
        title="Random Beer"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
        consequatur nemo rem quis dolores minima maiores inventore quaerat quasi
        nisi laudantium ad corporis alias optio tenetur cumque id, doloribus
        error."
      />
      <Featured
        link="/new-beer"
        image="/assets/new-beer.png"
        title="New Beer"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
        consequatur nemo rem quis dolores minima maiores inventore quaerat quasi
        nisi laudantium ad corporis alias optio tenetur cumque id, doloribus
        error."
      />
    </div>
  );
};

export default Home;
