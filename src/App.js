import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//Link is what we bring in to let us click a button and link another route on the frontend that will load another component. The to must match a defined route in index.js
import {Link} from 'react-router-dom'

//components
import Nav from './Components/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          List and Recipe App
        </Nav>
        <Link to="/list"><button>Go to list</button></Link>
        <Link to="/recipes"><button>Go to recipes landing page!</button></Link>
      </div>
    );
  }
}

export default App;
