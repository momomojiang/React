import React from 'react';
import TriviaRound from './TriviaRound';

// NOTE: you will need to build TriviaRound.js for component export

const testQuestion = {
    "questionId": 1,
    "description": "Who holds the career record for most stolen bases?",
    "hint": "This player stole a single season record of 130 bases in 1983 as a member of the Oakland Athetics",
    "topicId": 1,
    "topic": {
      "topicId": 1,
      "title": "Baseball",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvV_tsbT_kw10GstYSzppI60QKpc7_hRSzkHrRf3_IvYJZoPBqIg"
    },
    "answers": [
      {
        "answerId": 1,
        "answer": "Rickey Henderson",
        "questionId": 1,
        "isCorrect": true
      },
      {
        "answerId": 2,
        "answer": "Wade Boggs",
        "questionId": 1,
        "isCorrect": false
      },
      {
        "answerId": 3,
        "answer": "Willie Mays Hayes",
        "questionId": 1,
        "isCorrect": false
      }
    ]
};
const App = (props) => {
	return <TriviaRound question={testQuestion} />;
};
export default App