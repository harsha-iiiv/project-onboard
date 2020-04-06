/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
          <h3 className='title'>Naya Studio welcomes you</h3>
          <h5>What do you want to register as?</h5>
       <div className="row">
      <div className="col s12 m4">
     <Link to='/make'>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Maker</span>
         
        </div>
      
      </div>
      </Link>
    </div>
      <div className="col s12 m4">
      <Link to='/design'>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Designer</span>

        </div>
      
      </div>
      </Link>
    </div>
      <div className="col s12 m4">
      <Link to='/makedesign'>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Maker and Designer</span>
          
        </div>
      
      </div>
      </Link>
    </div>
  </div>
      </div>
    );
  }
}

export default App;
