import React, { Component } from 'react';

const divStyle = {
    border: 'solid 1px red',
    width: '300 px',
    padding:'10px',
    
  };
const spanStyle ={
    margin: '0 auto',
    color:'blue',
    padding:'10px',
    display:'block',
    
}



class Counter extends Component {

    render() {
        return (
            <div className="counter-container" style={divStyle}>
                <span style={spanStyle}>{this.props.value}</span>
                <button onClick={() => this.props.onIncrement()}> Increase</button> <button onClick={() => this.props.onDecrement()}>Decrease</button>
            </div>
        );
    }

}
export default Counter;