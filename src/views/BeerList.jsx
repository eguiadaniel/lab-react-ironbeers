import React, { Component } from 'react';
import { listBeers } from './../services/beer-api';
import { Link } from 'react-router-dom';

class BeerList extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    this.loadBeerList();
  }

  async loadBeerList() {
    const beers = await listBeers();
    this.setState({
      beers,
    });

    console.log(this.state.beers);
  }

  render() {
    return (
      <div>
        <h1>Beer List</h1>
        <ul>
          {this.state.beers.map((beer) => (
            <li key={beer._id}>
              <h2>
                <Link to={`/beer/${beer._id}`}>{beer.name}</Link>
              </h2>
              <img src={beer.image_url} alt={beer.name} />
              <h3>{beer.tagline}</h3>
              <small>Created by: {beer.contributed_by}</small>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BeerList;

// abv: 4.1
// attenuation_level: 76
// boil_volume: {value: 25, unit: "liters"}
// brewers_tips: "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort."
// contributed_by: "Sam Mason <samjbmason>"
// description: "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist."
// ebc: 15
// expireAt: "2021-03-18T19:58:49.893Z"
// first_brewed: "04/2008"
// food_pairing: (4) ["Fresh crab with lemon", "Garlic butter dipping sauce", "Goats cheese salad", "Creamy lemon bar doused in powdered sugar"]
// ibu: 41.5
// image_url: "https://images.punkapi.com/v2/2.png"
// ingredients: {malt: Array(3), hops: Array(4), yeast: "Wyeast 1056 - American Ale™"}
// method: {mash_temp: Array(1), fermentation: {…}, twist: null}
// name: "Trashy Blonde"
// ph: 4.4
// srm: 15
// tagline: "You Know You Shouldn't"
// target_fg: 1010
// target_og: 1041.7
// volume: {value: 20, unit: "liters"}
// _id: "5fb6a86265b9c209606e10e0"
