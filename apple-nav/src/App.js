import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import { Home, Mac, Ipad, Iphone, Watch, NavBar, SubNav } from "./components";

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <Route exact path="/" render={pr => <Home {...pr} />} />
          <Route path="/mac/" render={pr => <Mac {...pr} page={Mac} />} />
          <Route path="/ipad/" render={pr => <Ipad {...pr} page={Ipad} />} />
          <Route
            path="/iphone/"
            render={pr => <Iphone {...pr} page={Iphone} />}
          />
          <Route path="/watch/" render={pr => <Watch {...pr} page={Watch} />} />
        </div>
      </div>
    );
  }
}

export default App;
