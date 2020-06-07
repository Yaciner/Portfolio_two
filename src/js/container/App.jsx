import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Homepage';
import ProjectManagement from '../components/PM';
import {Cursor} from '../lib/CustomCursor';

class App extends Component {
  //
  // history = createHashHistory({
  //   basename: "", // The base URL of the app (see below)
  //   hashType: "slash", // The hash type to use (see below)
  //   // A function to use to confirm navigation with the user (see below)
  //   getUserConfirmation: (message, callback) => callback(window.confirm(message)),
  // });

componentDidMount() {
  Cursor();
}

  renderHome = () => {
    return <Home />;
  }

  renderPM = () => {
    return <ProjectManagement />;
  }

  renderDev = () => {
    return <ProjectManagement />;
  }
  renderMo = () => {
    return <ProjectManagement />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={this.renderHome} />
          <Route exact path='/projectmanager' render={this.renderPM} />
          <Route exact path='/development' render={this.renderDev} />
          <Route exact path='/motion' render={this.renderMo} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
