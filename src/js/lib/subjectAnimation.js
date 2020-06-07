import lottie from 'lottie-web';
import VanillaTilt from 'vanilla-tilt';
import $ from 'jquery';
import {GlitchFilter} from '@pixi/filter-glitch';
import {Container} from 'pixi.js';
let animation;

const subjectAnimation = () => {
  let currentSubjectClassName = window.subjectText.replace(/\s+/g, '').toLowerCase();
  let container = document.querySelector('.subject_animation');

  if (container) {
    if(animation) {
      animation.destroy();
    }
     animation = lottie.loadAnimation({
         container: container, // the dom element that will contain the animation
         renderer: 'svg',
         loop: true,
         autoplay: true,
         path: 'assets/data/' + currentSubjectClassName + '.json'
     });
     console.log(animation);
     VanillaTilt.init(document.querySelector('.subject_animation'), {
   		max: 25,
   		speed: 400
   	});


  }

};


export default subjectAnimation;
