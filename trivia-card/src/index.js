import React from 'react';
import ReactDOM from 'react-dom';
import TriviaCard from './TriviaCard';

const App = (props) => {
    return (
        <div>
            <TriviaCard
                title="Baseball"
                question="who holds the record for the most career stolen bases?"
                imgPath="https://www.thecenteroregon.com/wp-content/uploads/2015/04/ball.jpg"
                />
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));

