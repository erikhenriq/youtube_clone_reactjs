import React from 'react';
import Home from './containers/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
