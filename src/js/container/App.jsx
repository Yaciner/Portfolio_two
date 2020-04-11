import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Homepage';

class App extends Component {
  //
  // history = createHashHistory({
  //   basename: "", // The base URL of the app (see below)
  //   hashType: "slash", // The hash type to use (see below)
  //   // A function to use to confirm navigation with the user (see below)
  //   getUserConfirmation: (message, callback) => callback(window.confirm(message)),
  // });


  renderHome = () => {
    return <Home />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={this.renderHome} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
