import React, { Component } from 'react';
// import Header from './Header';
import Votes from './Votes';
import './App.css';

const list = [
  {
    id: 1,
    name: "React",
    votes: 0
  },
  {
    id: 2,
    name: "Vue",
    votes: 0
  },
  {
    id: 3,
    name: "Angular",
    votes: 0
  },
  {
    id: 4,
    name: "Ember",
    votes: 0
  }

]

class App extends Component {
  constructor() {
    super()
    this.state = {
      members: []
    };
  }
  componentDidMount() {
    this.setState({ members: list });
  }

  handleEvent = memberId => {
    console.log('Clicked')
    const updatedList = this.state.members.map(member => {
      if (member.id === memberId) {
        return Object.assign({}, member, {
          votes: member.votes + 1
        });
      } else {
        return member;
      }
    });
    this.setState({
      members: updatedList
    });
  }

  render() {

    return (

      this.state.members.map(member => (
        <Votes key={member.id} id={member.id} name={member.name} votes={member.votes} onVote={this.handleEvent} />

      )
      )
    )


  }
}










export default App;
