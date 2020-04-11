import React from 'react';
import {render} from 'react-dom';
import App from './container/App';

const init = () => {

  render(
    <App />,
    document.querySelector(`.react-mount`),
  );

};

init();
