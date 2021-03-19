import React, { Component } from 'react';
import { listBeers } from './../services/beer-api';
import { singleBeer } from './../services/beer-api';
import { randomBeer } from './../services/beer-api';

class SingleBeer extends Component {
  state = {
    beer: '',
    randomBeer:'' 
  };

  componentDidMount() {
    if (this.props.random) {
      this.loadRandomBeer();
    } else {
      this.loadBeer();
    }
  }

  async loadBeer() {
    const id = this.props.match.params.id;
    const beer = await singleBeer(id);

    if (beer) {
      this.setState({
        beer: beer,
      });
    } else {
      this.props.history.push(`/error?originalUrl=${this.props.match.url}`);
    }          
          console.log(this.state.beers);
  }
        
  async loadRandomBeer() {
      const beer = await randomBeer(); 
      this.setState({
      beer: beer,
    });
    }
    
  render() {
    const beer = this.state.beer;
    return (
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <span>{beer.first_brewed}</span>
        <h3>{beer.tagline}</h3>
        <small>Created by: {beer.contributed_by}</small>
      </div>
    );
  }
}

export default SingleBeer;
