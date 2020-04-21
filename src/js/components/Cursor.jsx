import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
let subjectIndex = 0;

class Cursor extends Component {

componentDidMount() {
  //initialize mouse
  let cursorSubject = document.querySelector('.cursor_subject__text');
  cursorSubject.innerHTML = 'Project management';
  window.addEventListener('mousedown', this.mouseDown);
  setTimeout(() => {
    document.querySelector('.cursor_progressbar').style.width = '100%';
  },10);
}

mouseDown() {
  console.log('mouse-down');
}

render() {
    return (
      <div className="cursor">
        <div className="cursor_shape"></div>
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
