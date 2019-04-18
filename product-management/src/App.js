import React, { Component } from 'react';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import List from './components/List';
import Creation from './components/Creation';
import Home from './components/Home';
import EditPage from './components/ProductEdit';
import './style.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <p className="title">PPM - Project Product Management</p>
                  </li>
                </ul>
              </div>
              <div className="div-inline">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active" >
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item" >
                    <Link className="nav-link" to="/list">Product List</Link>
                  </li>
                  <li className="nav-item" >
                    <Link className="nav-link" to="/creation">Product Creation</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="border-div"></div>
            <Route exact path="/" component={Home} />
            <Route  path="/list" component={List} />
            <Route  path="/creation" component={Creation} />
            <Route  path="/product/edit/:id" component={EditPage} />
        </BrowserRouter>
      </div >
    )
  }
}

export default App;
