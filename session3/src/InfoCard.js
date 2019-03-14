import React from 'react';

const h2Style={
    color: "red",
    alignContent: "center",
    magrin: "30px"
}


class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        // intizlize my state project
        this.state = {
            message: "By accempting the terms, your agree to be just watch.",
            hasAgreed: false,
            timesClicked: 0
        }
    }
    handleTerms() {
        this.setState({
            message: "Thank you for agreeing to the terms!",
            hasAgreed: true

        });
    }
    handleImageClick() {
        this.setState((prevState) => ({
            timesClicked: prevState.timesClicked + 1
        }));
    }

    render() {
        const { imgPath, title, description } = this.props;
        let myButton = (!this.state.hasAgreed)//Not false
            ? <button onClick={() => this.handleTerms()} className="btn btn-primary">Do you accept the term?</button>
            : null;

        return (
            <div className="card" style={{ width: "18rem", display:"inline-block" }}>
            <button onClick={()=>{this.props.handleDelete(this.props.id)}} className="btn btn-danger">X</button>
                <img onClick={() => this.handleImageClick()} src={imgPath} className="card-img-top" alt="info" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {myButton}
                    <hr />
                    <p>{this.state.message}</p>
                    <hr />
                    <h2 style={h2Style}>{this.state.timesClicked}</h2>
                </div>
            </div>
        )

    }

}

export default InfoCard
