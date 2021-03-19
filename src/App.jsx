import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss';

import BeerList from './views/BeerList';
import SingleBeer from './views/SingleBeer';
import NewBeer from './views/NewBeer';
import Home from './views/Home';

function App() {
  const random = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers" component={BeerList} exact />
          <Route path="/beer/:id" component={SingleBeer} exact />
          <Route 
          path="/random-beer" 
          render={(props) => (
          <SingleBeer {...props} random={random}/>            
          )}
          exact
          />  
          <Route path="/new-beer" component={NewBeer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
