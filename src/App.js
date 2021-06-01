import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/main/Main';
import FavoriteCharacters from './components/favorite/FavoriteCharacters';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>           
              <Main />
            </Route>
            <Route exact path='/favorite'>             
              <FavoriteCharacters />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;

