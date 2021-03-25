import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Settings from './pages/Settings';
import Contacts from './pages/Contacts';
import GameSnake from './pages/GameSnake';
import Snake1 from './pages/Snake copy';
import MailPage from './pages/MainGame';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/settings" component={Settings} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/copy" component={Snake1} />
        <Route path="/" component={MailPage} />
      </Switch>
    );
  }
}

export default App;
