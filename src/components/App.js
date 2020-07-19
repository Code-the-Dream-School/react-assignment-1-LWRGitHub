import React, {Component} from 'react';
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";

// components
import Wellcome from "./Wellcome";
import Header from './Header';
import Inputs from './Inputs';
import Game from './Game';

class App extends Component {

  render(){
    return (
      <HashRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/welcome" component={Wellcome} />
            <Route path="/inputs" component={Inputs} />
            <Route path="/gmae" component={Game} />
            <Route component={Wellcome} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
