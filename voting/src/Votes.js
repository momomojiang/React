import React, { Component } from 'react';


class Votes extends Component {

  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
    
      <div className="container">
        <p>{this.props.votes} </p><p>{this.props.name}</p> <button onClick={this.handleClick}>+</button>
      </div>
      

        
    )

  }

}


export default Votes

