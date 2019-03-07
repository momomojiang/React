import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
  this.state = {
      text: 'Hello from state!'
  }    	
  }
  
  componentDidMount(){
  setTimeout(()=>{
    this.setState({ text: 'New text!'})
  }, 2000);
}
  
  render(){
  return (
    <div>
      <h1>{this.state.text}</h1>
    </div>
  )
}
}

export default App;
