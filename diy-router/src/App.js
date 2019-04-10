import React, { Component } from 'react';
import './style.css';
import {withRouter } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.handleJavascript = this.handleJavascript.bind(this);
    this.handleHaskell = this.handleHaskell.bind(this);
    this.handleCoffee = this.handleCoffee.bind(this);
  }
  handleJavascript(){
    let path = `javascript`;
    this.props.history.push(path);
  }
  handleHaskell(){
    let path = `haskell`;
    this.props.history.push(path);
  }
  handleCoffee(){
    let path = `coffeescript`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="App">
        <h2 onClick={this.handleJavascript}><a href=''>JavaScript</a></h2>
        <h2 onClick={this.handleHaskell}><a href=''>Haskell</a></h2>
        <h2 onClick={this.handleCoffee}><a href=''>CoffeeScript</a></h2>
        <hr></hr>

      </div>
    );
  }
}

export default withRouter(App);
