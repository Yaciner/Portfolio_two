import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import Grained from '../lib/Grained';

class Homepage extends Component {

  componentDidMount() {
    // setup the options for the bg
    let options = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.03,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1
   };
   // Initialize textured background animation
      Grained('#bg',options);
  }

  render() {
    return (
      <div className="home">
      </div>
    );
  }
};


export default Homepage;
