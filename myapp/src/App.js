import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import Form from './Form';
import './style.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      error: null
    }
  }
  onHandleSubmit(name) {
    this.setState({ user: null, error: null })
    this.fetchData(name);
  }
  fetchData(name) {
    axios.get("http://api.github.com/users/" + name)
      .then(response => {
        console.log(response)
        this.setState({ user: response.data })
      })
      .catch(error => {
        this.setState({
          error:"User doesn't exist, pick a different username"
        })
      })
  }

  userResult() {
    if (this.state.user === null) {
      return null;
    }
    return <User user={this.state.user} />
  }
  buildError() {
    if (this.state.error === null) {
      return null;
    }
    return <h3 style={{ color: "red", margindisplay: "inline-block" }}>{this.state.error}</h3>
  }

  render() {
    return (
      <>
      <div className="whole-result">
        <h1>GitHub Score</h1>
        <Form onFormSubmit={(data) => this.onHandleSubmit(data)} />
        {this.userResult()}
      </div>
      {this.buildError()}
      </>
    )
  }
}





export default App;
