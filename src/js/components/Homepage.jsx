import React, {Component} from 'react';
import Grained from '../lib/Grained';
import Header from '../components/Header';
import Wallpaper from '../components/Wallpaper';
import Cursor from '../components/Cursor';
import Animation from "../lib/subjectAnimation";

const subjects = {'Project manager':"I'm currently working as a", 'Development': "but i also love", 'Motion': "and powerful"}
let currentSubject;
let currentSubjectClassName;
let noChangeSubject = true;
window.subjectIndex = 0;

class Homepage extends Component {

  componentWillMount() {
    //currentSubject = subjects[window.subjectIndex];
    currentSubject = Object.keys(subjects)[window.subjectIndex];

    window.subjectText = currentSubject;
    console.log(currentSubject);
    currentSubjectClassName = currentSubject.replace(/\s+/g, '').toLowerCase();

    // window.addEventListener('scroll', throttle(header, 10));
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
    // Grained('#bg',options);

    //animate
    let animation = new Animation();

    //add Wallpaper

    //check for subjectText
    this.startLoop();

  }

  componentWillUnmount() {
    this.stopLoop();
  }

  startLoop() {
    if (!this._frameId) {
      this._frameId = window.requestAnimationFrame(this.loop.bind(this));
    }
  }

  loop() {
    // perform loop work here
    // Set up next iteration of the loop
    this._frameId = window.requestAnimationFrame(this.loop.bind(this));
    // console.log(document.querySelector('.cursor_subject').offsetWidth);
    let fullWidth = document.querySelector('.cursor_subject').offsetWidth;

    // let currentWidth = getComputedStyle(document.querySelector('.cursor_progressbar')).width;
    let currentWidth = document.querySelector('.cursor_progressbar').offsetWidth;

    if(fullWidth - 2 < currentWidth && noChangeSubject) {
      window.subjectIndex =+ 1;
      noChangeSubject = false;
      this.componentWillMount();
      this.forceUpdate();
    }
  }

  stopLoop() {
    window.cancelAnimationFrame(this._frameId);
  }



  render() {
    return (
      <div>
        <Header />
        // <Wallpaper />
        <section className="intro_section">
        <Cursor />
        <section className="intro_section__info">
          <span className="intro_section__subtitle">
          { Object.values(subjects)[window.subjectIndex] }
          </span>
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
