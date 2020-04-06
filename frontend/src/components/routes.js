import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Designer from "./Desiner";
import Maker from './Maker'
import MakeDesign from './MakeDesign'
import Main from './Main'
 class Routes extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <section className="container">
          
            <Switch>
              <Route exact path="/design" component={Designer} />
              <Route exact path="/" component={Main} />
              <Route exact path="/make" component={Maker} />
              <Route exact path="/makedesign" component={MakeDesign} />
              
            </Switch>
          </section>
        </React.Fragment>
      </div>
    );
  }
}

export default Routes;