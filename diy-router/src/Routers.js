import React, { Component } from 'react';
import App from './App';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Javascript from './Javascript';
import CoffeeScript from './CoffeeScript';
import Haskell from './Haskell';

class Routers extends Component {
    render() {
        return (
            <Router>
                <div className="Router-div">
                    <Route path="" exact strict component={App}/>
                    <Route path="/haskell" exact strict component={Haskell}/>
                    <Route path="/javascript" exact strict component={Javascript}/>
                    <Route path="/coffeescript" exact strict component={CoffeeScript}/>
                </div>
            </Router>
        )
    }

}

export default Routers;