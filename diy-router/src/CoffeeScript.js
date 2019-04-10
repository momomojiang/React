import React, { Component } from 'react';



class CoffeeScript extends Component {
    constructor() {
        super();
        this.state = {
            seconds: 5
        }
        this.countdown = this.countdown.bind(this);
    }
    componentDidMount() {
        console.log("Did Mount")
        this.interval = setInterval(() => {
            this.countdown()
        }, 1000)
    }
    countdown() {
        console.log("countDown")
        if (this.state.seconds > 0) {
            this.setState({
                seconds: this.state.seconds - 1
            })
        }else{
            clearInterval(this.interval)
            let path = `javascript`;
            this.props.history.push(path);
        }

    }
 
    render() {
        console.log("*Render*")
        return (
            <div className="coffee-div">
                <p>CoffeeScript is a programming language that transcompiles to JavaScript, so we'll be redirecting back to javascript in <span>{this.state.seconds}</span>.</p>
            </div>
        )
    }

}

export default CoffeeScript;