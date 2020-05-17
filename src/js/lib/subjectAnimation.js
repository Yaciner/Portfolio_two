import lottie from 'lottie-web';
import VanillaTilt from 'vanilla-tilt';
import $ from 'jquery';

const subjectAnimation = () => {
  let currentSubjectClassName = window.subjectText.replace(/\s+/g, '').toLowerCase();
  let container = document.querySelector('.subject_animation' + '.' + currentSubjectClassName);
  if (container) {
     lottie.loadAnimation({
         container: container, // the dom element that will contain the animation
         renderer: 'svg',
         loop: true,
         autoplay: true,
         path: 'assets/data/projectmanagement.json'
     });

     VanillaTilt.init(document.querySelector('.subject_animation'), {
   		max: 25,
   		speed: 400
   	});
  }

};


export default subjectAnimation;
