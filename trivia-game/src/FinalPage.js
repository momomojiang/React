import React from 'react';
import { withRouter } from 'react-router-dom';

class FinalPage extends React.Component {
    handleClick = () => {
        this.props.history.push("/");
    }


    render() {
        return (
            <div className="end-page">
                <h2>Game Complete !</h2>
                <h4>Final Score: {this.props.location.state.finalScore}</h4>
                <button onClick={this.handleClick} className="another-round-btn" >Another Round</button>
            </div>
        )
    }
}

export default withRouter(FinalPage);