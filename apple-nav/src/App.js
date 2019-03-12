import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import {
  Home,
  Mac,
  Ipad,
  Iphone,
  Watch,
  NavBar,
  Mac1,
  Ipad1,
  Iphone1,
  Watch1,
  Mac2,
  Ipad2,
  Iphone2,
  Watch2
} from "./components";

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <Route exact path="/" render={pr => <Home {...pr} />} />
          <Route exact path="/mac/" render={pr => <Mac {...pr} page={Mac} />} />
          <Route
            exact
            path="/ipad/"
            render={pr => <Ipad {...pr} page={Ipad} />}
          />
          <Route
            exact
            path="/iphone/"
            render={pr => <Iphone {...pr} page={Iphone} />}
          />
          <Route
            exact
            path="/watch/"
            render={pr => <Watch {...pr} page={Watch} />}
          />
          <Route
            path={`/iphone/${Iphone.name}1`}
            render={pr => <Iphone1 {...pr} />}
          />
          <Route path={`/mac/${Mac.name}1`} render={pr => <Mac1 {...pr} />} />
          <Route
            path={`/watch/${Watch.name}1`}
            render={pr => <Watch1 {...pr} />}
          />
          <Route
            path={`/ipad/${Ipad.name}1`}
            render={pr => <Ipad1 {...pr} />}
          />
          <Route
            path={`/iphone/${Iphone.name}2`}
            render={pr => <Iphone2 {...pr} />}
          />
          <Route path={`/mac/${Mac.name}2`} render={pr => <Mac2 {...pr} />} />
          <Route
            path={`/watch/${Watch.name}2`}
            render={pr => <Watch2 {...pr} />}
          />
          <Route
            path={`/ipad/${Ipad.name}2`}
            render={pr => <Ipad2 {...pr} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
