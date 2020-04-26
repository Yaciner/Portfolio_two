import React, { Component } from 'react';
import CircleSVG from "../lib/CircleSVG";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useHistory } from "react-router-dom";
import $ from 'jquery';
let subjectIndex = 0;
let mouseHoldTimer;

class Cursor extends Component {

componentDidMount() {
  //initialize mouse
  let cursorSubject = document.querySelector('.cursor_subject__text');
  let circle = document.querySelector('.circlesvg_circle');
  cursorSubject.innerHTML = 'Project management';

  $('body').mouseup(function() {
    circle ? circle.setAttribute('stroke-dashoffset', 1000) : null;
    clearTimeout(mouseHoldTimer);
  }).mousedown(function() {
    circle ? circle.setAttribute('stroke-dashoffset', 0) : null;
    mouseHoldTimer = setTimeout(() => {
      document.querySelector('.cursor_shape').classList.add("expand");
      let history = useHistory();
      history.push('/projectmanagement');

      setTimeout(() => {
          document.querySelector('.cursor_shape').classList.remove("expand");
      }, 500);
    }, 700);
  });

  setTimeout(() => {
    document.querySelector('.cursor_progressbar').style.width = '100%';
  },0);
}

mouseDown(circle) {
  console.log('entering');
  circle ? circle.setAttribute('stroke-dashoffset', 0) : null;
}

mouseLeave(circle) {
  console.log('leaving');
  circle ? circle.setAttribute('stroke-dashoffset', 1000) : null;
}

render() {
    return (
      <div className="cursor">
        <div className="cursor_shape">
        <CircleSVG width={20} fill="#fff" className="cursor_circle" />
        </div>
        <div className="cursor_subject">
          <p className="cursor_subject__text"></p>
          <span className="cursor_subject__timevalue"></span>
          <div className="progressbar_container">
            <div className="cursor_progressbar"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cursor;
