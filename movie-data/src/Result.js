import React from 'react';

class Result extends React.Component {
    constructor(props) {
        console.log("Constructor");
        super(props);
        // intizlize my state project

    }
    render() {
        console.log("**RENDER**");
        const { Year, Director, Plot, Title } = this.props.movie;
        return (
            <div className="result-body">
                <p><b>Name:</b> {Title}</p>
                <p><b>Year:</b> {Year}</p>
                <p><b>Director:</b> {Director}</p>
                <p><b>Plot:</b> {Plot}</p>
            </div>
        )
    }


}

export default Result;