import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import clock from "./clock";
import calculator from "./calculator";
import maps from "./maps";
import DemoCarousel from "./DemoCarousel"

 
//This is logu
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink to="/clock">clock</NavLink></li>
          <li><NavLink exact to="/">calculator</NavLink></li>
            <li><NavLink to="/maps">maps</NavLink></li>
            <li><NavLink to="/DemoCarousel">DemoCarousel</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/clock" component={clock}/>
            <Route exact path="/" component={calculator}/>
            <Route path="/maps" component={maps}/>
            <Route path="/DemoCarousel" component={DemoCarousel}/> 
          </div>
        </div>
          </HashRouter>
    );
  }
}
 
export default App ;