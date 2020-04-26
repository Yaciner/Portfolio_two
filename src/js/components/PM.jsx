import React, {Component} from 'react';
import Grained from '../lib/Grained';
import Header from '../components/Header';
import Wallpaper from '../components/Wallpaper';
import Cursor from '../components/Cursor';

class PM extends Component {

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
  }

  render() {
    return (
      <div>
        <Header />
        <section className="pm_section">
        <Cursor />
        </section>
      </div>
    );
  }
};


export default PM;
