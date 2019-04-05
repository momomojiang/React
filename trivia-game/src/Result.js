import React from 'react';
import { withRouter} from 'react-router-dom';



class Result extends React.Component {
    constructor(props) {
        console.log("Constructor");
        super(props);
        this.state = {
            showHint: false,
            correct: false,
            wrong: false,
            i: 0,
            showNxtBtn: true,
            disableDiv: false,
            score: 0
        }
        // intizlize my state project
    }

    nextQuestion = () => {
        if (this.state.i === 5) {
            alert("This is the last Question");
            this.props.history.push({
                pathname: '/end',
                state: { finalScore: this.state.score }
            })


        }
        this.setState({
            i: this.state.i + 1,
            correct: false,
            wrong: false,
            disableDiv: false
        })
    }
    renderHint() {
        this.setState((prevState) => ({
            showHint: !prevState.showHint
        }))
    }
    handleCorrectClick() {
        this.setState({
            correct: true,
            disableDiv: true,
            score: this.state.score + 5
        })
    }
    handleWrongClick() {
        this.setState({
            wrong: true,
            disableDiv: true,
            score: this.state.score - 5
        })
    }
    correctAnswer = () => {
        return (
            <div>
                <p className="correct">Correct !!!</p>
                <button class="btn btn-secondary" onClick={this.nextQuestion}>Next Question</button>
            </div>
        )
    }
    wrongAnswer() {
        return (
            <div>
                <p className="wrong">Wrong... Score -5</p>
                <button class="btn btn-secondary" onClick={this.nextQuestion}>Next Question</button>
            </div>
        )
    }
    renderCard() {
        let cards = this.props.gameinfo;
        const { questionId, hint, topic, description, answers } = cards[this.state.i];
        // console.log(cards[i])
        var divStyle = {
            display: this.state.disableDiv ? 'none' : 'block'
        }
        return (
            <>
                <p className="score">Score: {this.state.score}</p>
                <div className="card" key={questionId}>
                    <div className="card-body" >
                        <img onClick={() => this.renderHint()} src={topic.imageUrl} alt={topic.title} />
                        <h5 className="card-title">{topic.title}</h5>
                        <p className="description">{this.state.showHint ? hint : description}</p>
                    </div>
                    <br />
                    <div className="answers-body" style={divStyle}>
                        <button class="btn btn-secondary" value="buttonOne" onClick={() => answers[0].isCorrect === true ? this.handleCorrectClick() : this.handleWrongClick()}>{answers[0].value}</button>
                        <button class="btn btn-secondary" value="buttonTwo" onClick={() => answers[1].isCorrect === true ? this.handleCorrectClick() : this.handleWrongClick()}>{answers[1].value}</button>
                        <button class="btn btn-secondary" value="buttonThree" onClick={() => answers[2].isCorrect === true ? this.handleCorrectClick() : this.handleWrongClick()}>{answers[2].value}</button>
                    </div>
                    {this.state.correct ? this.correctAnswer() : null}
                    {this.state.wrong ? this.wrongAnswer() : null}
                    {/* <FinalPage style={divStyle} score={this.state.score}/> */}
                </div>

            </>

        )
    }
    render() {
        console.log("**RENDER**");
        return (
            <div className="result-body">

                {this.renderCard()}

            </div>
        )
    }


}

export default withRouter(Result);