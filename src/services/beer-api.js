import axios from 'axios';

export const listBeers = async () => {
  const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
  // const body = response.data;
  return response.data;
};


export const singleBeer = async (id) => {
  const url = 'https://ih-beers-api2.herokuapp.com/beers/' + id
  const response = await axios.get(url)
  return response.data
}

export const randomBeer = async () => {
  const url = 'https://ih-beers-api2.herokuapp.com/beers/random'
  const response = await axios.get(url)
  return response.data
}