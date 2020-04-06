/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React, { Component } from 'react';
import Routes from "./components/routes"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
              <div className="nav-wrapper">
                <a href="/" className="brand-logo center">Naya Studio</a>
                
              </div>
            </nav>

            <Switch>
              
              <Route component={Routes} />
            </Switch>

            <footer className="page-footer">
              <div className="container">
                © 2020 Copyrights
                <a className="grey-text text-lighten-4 right" href="#!">
                  More Links
                </a>
              </div>
            </footer>
         
        </Router>
      </div>
    );
  }
}

export default App;
