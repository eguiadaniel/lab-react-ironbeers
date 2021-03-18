import React, { Component } from 'react';
import { listBeers } from './../services/beer-api';

class SingleBeer extends Component {
  state = {
    beer: '',
  };

  componentDidMount() {
    this.loadBeer();
  }

  async loadBeer() {
    const beers = await listBeers();
    const id = this.props.match.params.id;

    const beer = beers.find((beer) => beer._id === id);
    if (beer) {
      this.setState({
        beer: beer,
      });
    } else {
      this.props.history.push(`/error?originalUrl=${this.props.match.url}`);
    }

    console.log(this.state.beers);
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
