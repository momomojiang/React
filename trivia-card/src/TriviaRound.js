import React from 'react';


class TriviaRound extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            showHint: false,
            isShow: false
        }
        this.handleHintBtn = this.handleHintBtn.bind(this);
        //this.correctAnswer= this.correctAnswer.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    tick() {
        this.setState((prevState) => ({
            timer: prevState.timer + 1
        }))
    }
    handleCorrect = () => {
        this.setState({ isShow: true })
    };
    handleWrong = () => {
        this.setState({ isShow: false })
    };
    handleHintBtn() {
        this.setState((prevState) => ({
            showHint: !prevState.showHint
        }))
    }
    renderTitle() {
        let questionOne = this.props.question;
        return Object.entries(questionOne).map(([key, value], i) => {
            return (
                <div key={key}>
                    {value.title}
                </div>
            )
        })
    }
    renderButtons() {
        let questionOne = this.props.question;
        const { answers } = questionOne;

        // console.log(answers);
        return answers.map((answers) => {
            return (

                <div value={answers.isCorrect} key={answers.answerId} style={{ display: "inline-block", margin: "0 10px" }}>
                    <button onClick={answers.isCorrect === true ? this.handleCorrect : this.handleWrong} >{answers.answer}</button>
                </div>

            )
        })
    }
    renderImage() {// Render the image as an HTML string entity
        return { __html: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvV_tsbT_kw10GstYSzppI60QKpc7_hRSzkHrRf3_IvYJZoPBqIg" />' }
    }
    render() {
        let questionOne = this.props.question;
        const { description, hint } = questionOne;

        return (
            <>
                <h3 style={{marginLeft:"200px"}}>Timer:{this.state.timer}</h3>
                <div className="card" style={{ left: "40%", right: "50%", width: "18rem", display: "inline-block", textAlign: "center" }}>
                    <div style={{ marginTop: "30px" }} dangerouslySetInnerHTML={this.renderImage()} />
                    <div className="card-body" >
                        <h5 className="card-title">{this.renderTitle()}</h5>
                        <p className="card-question">{this.state.showHint ? hint : description}</p>
                        <button onClick={this.handleHintBtn} className="btn btn-primary" >{this.state.showHint ? "Hide" : "Hint"}</button>
                    </div>
                </div>
                <div className="answers" style={{ textAlign: "center", marginTop: "50px" }}>
                    {this.renderButtons()}
                    {this.state.isShow && <p style={{ color: "green" }}>Correct!!!</p>}
                    {!this.state.isShow && <p style={{ color: "red" }}>Give a Try :)</p>}
                </div>

            </>

        )
    }

}

export default TriviaRound;