import React from 'react';
import ReactDOM from 'react-dom';
// import TriviaRound from './TriviaRound';
import App from './App';
// const App = (props) => {
//     return (
//         <div>
//             <TriviaCard
//                 title="Baseball"
//                 question="who holds the record for the most career stolen bases?"
//                 imgPath="https://www.thecenteroregon.com/wp-content/uploads/2015/04/ball.jpg"
//                 />
//         </div>
//     )
// }


ReactDOM.render(<App/>, document.getElementById('root'));

// function Hint(props) {
//     if (!props.hint) {
//         return null;
//     }
//     return (
//         <div>
//             <hr />
//             <p>This player stole a single-season record of 130 bases in 1983 as a memember of the Oakland Athletics</p>
//         </div>
//     )
// }