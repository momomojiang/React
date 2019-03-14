import React from 'react';

const wrapper = {
    width: "100%",
    height: "490px",

}
const button = {
    height: "20px",
    position: "relative",
    margin: "-20px -50px",
    width: "100px",
    top: "45%",
    left: "45%"
}
const buttonTwo = {
    height: "20px",
    position: "relative",
    margin: "-50px -90px",
    width: "100px",
    top: "55%",
    left: "55%"
}

const h1Style = {
    textAlign: "center",
    color: "black",
    fontSize: "60px"

}




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }
    backZero(){
        this.setState(() => ({
            count: 0
        }));
    }
    render() {
        const { name } = this.props;
        if (this.state.count >= 6) {
            var spanStyle = {
                color: "blue"
            }
        } else {
             spanStyle = {
                color: "red"
            }
        }
        return (

            <div style={wrapper}>
                <h1 style={h1Style}>Hello {name}</h1>
                <button onClick={() => { this.handleClick() }} style={button}>Click Me</button>
                <button onClick={() => { this.backZero() }} style={buttonTwo}>Reset</button>
                <p style={h1Style}>You clicked me <span style={spanStyle}>{this.state.count}</span> times</p>

            </div>
        )
    }
}

export default App