import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Greeting from './Greeting';
import GamePage from './GamePage';
import FinalPage from './FinalPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/" exact strict component={Greeting} />
        <Route path="/start" exact strict component={GamePage} />
        <Route path="/end" exact strict component={FinalPage} />
        </div>
      </Router>
    );
  }
}

export default App;
