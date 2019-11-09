import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './containers/Home/Home';
import SearchBar from './components/SearchBar/SearchBar';
import Video from './containers/Video/Video';

function App() {
  return (
    <Router>
      <div>
        <SearchBar />
        <Switch>
          <Route path="/video" >
            <Video />
          </Route>

          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
