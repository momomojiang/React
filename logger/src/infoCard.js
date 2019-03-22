import React from 'react';
import './style.css';

class InfoCard extends React.Component {

    render() {
        const {  project,description, minutes } = this.props;
        return (
            <div className="body">
                <p>{project}</p>
                <p>{description}</p>
                <p>{minutes} minutes</p>
            </div>
        )
    }

}
export default InfoCard;