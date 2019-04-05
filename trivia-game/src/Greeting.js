import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';

class Greeting extends Component{

    goGamePage(e){
        e.preventDefault();
        this.props.history.push('/start');
    }
    render() {
        return (
            <div className="greeting-page">
                <h1>Trivia Game!</h1>
                <button className="bgn-btn" onClick={(e)=>this.goGamePage(e)}>Begin</button>
            </div>
        )
    }
}

export default withRouter(Greeting);