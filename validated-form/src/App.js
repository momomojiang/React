import React, { Component } from 'react';
import LogForm from "./components/LogForm"
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import Route from 'react-router-dom/Route'
import Success from "./components/Success";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/success" exact strict component={Success} />
          <Route path="/" exact strict component={LogForm} />
        </div>
      </Router>
    );
  }
}

export default App;
