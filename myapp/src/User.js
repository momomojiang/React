import React, { Component } from 'react';

class User extends Component{
    
    calculateScore(){
        const {public_repos}=this.props.user
        if(public_repos<20){
            return<p style={{color:"red"}}>Needs Work !</p>
        }
        else if(public_repos<50){
            return<p style={{color:"orange"}}>A decent start !</p>
        }
        else if(public_repos<100){
            return<p >Doing good!</p>
        }
        else if(public_repos<200){
            return<p style={{color:"green"}}>Great Job !</p>
        }
        else if(public_repos>=200){
            return<p style={{color:"blue"}}>Github Elite!</p>
        }
    }

    render(){
        const {public_repos}=this.props.user
        return(
            <div className="score-div">
                <h2>Your Score: {public_repos}</h2>
                {this.calculateScore()}
            </div>
        )
    }
}

export default User;