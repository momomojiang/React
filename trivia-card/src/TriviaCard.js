import React from 'react';


function Hint(props){
    if(!props.hint){
        return null;
    }
    return(
        <div>
            <hr/>
            <p>This player stole a single-season record of 130 bases in 1983 as a memember of the Oakland Athletics</p>
        </div>
    )
}



class TriviaCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showHint:false,
        }
        this.handleHintBtn = this.handleHintBtn.bind(this);
    }
    handleHintBtn(){
        this.setState((prevState)=>({
            showHint:!prevState.showHint
        }))
    }
    render(){
        const {title,question,imgPath,answer} = this.props;
        return(
            <div className="card" style={{ marginLeft:"30px", width: "18rem", display:"inline-block", textAlign:"center" }}>
                <img src={imgPath} className="card-img-top" alt="info" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-question">{question}</p>
                    <button onClick={this.handleHintBtn} className="btn btn-primary">{this.state.showHint?"Hide":"Hint"}</button>
                </div>
                <Hint hint={this.state.showHint}/>
            </div>
            
        )
    }

}

export default TriviaCard;