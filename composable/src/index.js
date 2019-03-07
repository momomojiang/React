import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const Square = (props) =>{
    return React.createElement(
        "h1",
        { 
            style: { 
                margin:"5px",
                color: props.textColor,
                backgroundColor: props.backgroundColor, 
                height:"300px", 
                width:"300px", 
                display:"inline-block" 
                
            } 
        },
        props.textColor + " on "+ props.backgroundColor
    );
}
ReactDOM.render(
    React.createElement(
      "div",
      {},
      Square({
        backgroundColor:"Pink",
        textColor: "Green",
      }),
      Square({
        backgroundColor:"Green",
        textColor: "White",
      }),
      Square({
        backgroundColor:"Blue",
        textColor: "Orange",
      }),
    ),
    document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
