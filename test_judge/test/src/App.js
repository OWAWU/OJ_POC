import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Home, Auth } from './pages';

class App extends Component {
    render() {
        return (
          <HashRouter>
              <Route exact path="/" component={Home}/>
              <Route path="/auth" component={Auth}/>
          </HashRouter>
        );
    }
}

export default App;