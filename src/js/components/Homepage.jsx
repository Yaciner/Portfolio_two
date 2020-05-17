import React, {Component} from 'react';
import Grained from '../lib/Grained';
import Header from '../components/Header';
import Wallpaper from '../components/Wallpaper';
import Cursor from '../components/Cursor';
import Animation from "../lib/subjectAnimation";

const subjects = ['Project manager', 'Developemnt', 'Motion'];
let currentSubject;
let currentSubjectClassName;

class Homepage extends Component {

  componentWillMount() {
    //set global subjectIndex
    window.subjectIndex = 0;
    currentSubject = subjects[window.subjectIndex];
    window.subjectText = subjects[window.subjectIndex];
    currentSubjectClassName = currentSubject.replace(/\s+/g, '').toLowerCase();
  }

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

    //animate
    let animation = new Animation();


  }

  render() {
    return (
      <div>
        <Header />
        <section className="intro_section">
        <Cursor />
        <section className="intro_section__info">
          <h1>
            { window.subjectText }
          </h1>
        </section>
        <div className={`subject_animation ${currentSubjectClassName}`} data-tilt data-tilt-scale=".9" data-tilt-full-page-listening></div>
        </section>
      </div>
    );
  }
};


export default Homepage;
