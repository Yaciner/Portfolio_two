import React from 'react';
import {render} from 'react-dom';
import App from './container/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const init = () => {

  render(
    <App />,
    document.querySelector(`.react-mount`),
  );

};

init();
