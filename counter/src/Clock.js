import React from "react";

const style ={
    marginLeft:"300px",
    fontSize:"30px",

}


class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            time:new Date()
        };
    }
    componentDidMount(){
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    tick(){
        this.setState({
            time: new Date()
        });
    }
    render(){
        return(
            <p  style={style}>
                The time is {this.state.time.toLocaleTimeString()}.
            </p>
        )
    }
}

export default Clock;