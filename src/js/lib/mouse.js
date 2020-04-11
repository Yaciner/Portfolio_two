import createElementSVG from './createElementSVG';

let mouseX, mouseY;
let x, y;
let innerWidth = 50;
let innerHeight = 50;
// let started = true;

const handleMouseMove = e => {
  ({pageX: mouseX, pageY:mouseY} = e);//kortere manier
};

const move = $circle => {
  const oldX = $circle.getAttribute('cx');
  const oldY = $circle.getAttribute('cy');
  x += (mouseX - oldX) / 5;
  y += (mouseY - oldY) / 5;

  $circle.setAttribute('cx', x);
  $circle.setAttribute('cy', y);
  requestAnimationFrame(() => move($circle)); //opnieuw oproepen om een lus te maken met 60 frames per seconden

};

const render = () => {
  x = innerWidth / 2;
  y = innerHeight /2;
  const $svg = document.querySelector('.circle-mouse');


  const $circle = createElementSVG('circle', {
    r: 7,
    cx: x,
    cy: y
  }, $svg);

  return $circle;
}

const resetAnimation = () => {
  cancelAnimationFrame();
}

export default () => {
  mouseX = innerWidth / 2;
  mouseY = innerHeight / 2;

  const $circle = render();

  document.addEventListener(`mousemove`, handleMouseMove);
  document.addEventListener(`mouseclick`, resetAnimation);


  requestAnimationFrame(() => move($circle));
}
