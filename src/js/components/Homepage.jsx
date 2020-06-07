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
    let fullWidth = document.querySelector('.cursor_subject').offsetWidth;
    let currentWidth = document.querySelector('.cursor_progressbar').offsetWidth;

    if(fullWidth - 2 < currentWidth && noChangeSubject) {
      document.querySelector('.intro_section h1 span').style.top = '-60px';
      document.querySelector('.intro_section h2 span').style.top = '-60px';
      setTimeout(() => {
        if(noChangeSubject) {
          window.subjectIndex = window.subjectIndex + 1;
          currentSubject = Object.keys(subjects)[window.subjectIndex];
          window.subjectText = currentSubject;
          new Animation();
          if(window.subjectIndex >= Object.keys(subjects).length) {
            window.subjectIndex = 0;
          }
          this.componentWillMount();
          noChangeSubject = false;
        }

        this.componentWillMount(noChangeSubject);
        document.querySelector('.cursor_progressbar').style.transition = 'width 1s ease';
        document.querySelector('.cursor_progressbar').style.width = '0';
        document.querySelector('.cursor_subject__text').innerHTML = window.subjectText;
        this.forceUpdate();
        document.querySelector('.intro_section h1 span').style.opacity = '0';
        document.querySelector('.intro_section h2 span').style.opacity = '0';
        document.querySelector('.intro_section h1 span').style.top = '120px';
        document.querySelector('.intro_section h2 span').style.top = '60px';
      }, 700);

      //do animations

      setTimeout(() => {
        document.querySelector('.intro_section h1 span').style.opacity = '1';
        document.querySelector('.intro_section h2 span').style.opacity = '1';
        document.querySelector('.intro_section h1 span').style.top = '0';
        document.querySelector('.intro_section h2 span').style.top = '0';
      }, 1000);
      setTimeout(() => {
        document.querySelector('.cursor_progressbar').style.transition = 'width 10s linear';
        document.querySelector('.cursor_progressbar').style.width = '100%';
        noChangeSubject = true;
      }, 2000);
    }
  }

  stopLoop() {
    window.cancelAnimationFrame(this._frameId);
  }



  render() {
    return (
      <div>
        <Header />
        <section className="intro_section">
        <Cursor />
        <section className="intro_section__info">
          <h2 className="intro_section__subtitle">
            <span>
              { Object.values(subjects)[window.subjectIndex] }
            </span>
          </h2>
          <h1>
            <span>
              { window.subjectText }
            </span>
          </h1>
        </section>
        <div className={`subject_animation ${currentSubjectClassName}`} data-tilt data-tilt-scale=".9" data-tilt-full-page-listening></div>
        </section>
      </div>
    );
  }
};


export default Homepage;
