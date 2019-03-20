import React from 'react';
import './style.css'

class TimeInfo extends React.Component {

    render() {
        const { localTime } = this.props
        return (
            <div className="time" >
                <button onClick={() => { this.props.handleDelete(this.props.id) }} className="btn btn-danger">X</button>
                <p className="time-text">{localTime}</p>
            </div>
        )
    }
}

export default TimeInfo;