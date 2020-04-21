import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import Grained from '../lib/Grained';
import Header from '../components/Header';
import Cursor from '../components/Cursor';
import Initializer from '../lib/Initializer';
import Loader from '../lib/Loader';
import SystemOne from '../lib/systemOne';

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
  //  Grained('#bg',options);

    //initialize 3D
    Initializer();

    //set global indexOf
    window.demoNum = 1;
    new Loader(SystemOne);

  }

  render() {
    return (
      <div>
        <Header />
        <section className="intro_section">
        <Cursor />
          <div className="loader"></div>
          <div className="content-outer">
            <div className="content-inner">
              <h1>Oscillation</h1>
              <a href="/" className="replay-animation">Replay</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
};


export default Homepage;
