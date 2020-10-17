import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Homepage';

class App extends Component {



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
