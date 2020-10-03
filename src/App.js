import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import clock from "./js/clock";
import calculator from "./js/calculator";
import maps from "./js/maps";
import DemoCarousel from "./js/DemoCarousel";
import FormValidator from "./js/FormValidator";

 
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
            <li><NavLink to="/FormValidator">FormValidator</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/clock" component={clock}/>
            <Route exact path="/" component={calculator}/>
            <Route path="/maps" component={maps}/>
            <Route path="/DemoCarousel" component={DemoCarousel}/>
            <Route path="/FormValidator" component={FormValidator}/> 
          </div>
        </div>
          </HashRouter>
    );
  }
}
 
export default App ;