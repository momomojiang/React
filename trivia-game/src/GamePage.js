import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import Result from './Result';


class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameinfo: null
        }
    }
    componentWillMount(){
        console.log("Will Mount")
        axios.get("http://34.215.246.172/api")
        .then(response => {
            // console.log(response)
            this.setState({gameinfo:response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    gameInfoResult(){
        if(this.state.gameinfo === null){
            return null;
        }
        return < Result gameinfo={this.state.gameinfo}/>
    }
    
    render() {
        return (
            <div>
                {this.gameInfoResult()}
            </div>
        )
    }
}

export default withRouter(GamePage);