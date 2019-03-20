import React from 'react';
import moment from 'moment-timezone';
import './style.css'

class ClockForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeZones: moment.tz.names(),
            theTime: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ theTime: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState({
            timeZones: moment.tz.names(),
            theTime: ""
        })
        
    }
    handleOption() {
        return (this.state.timeZones.map((option, index) => {
            return (
                <option value={"Local time in " + option + " is " + moment().tz(option).format("h:mm:ss A")} key={index}>{option}</option>
            )
        })
        )
    }
    render() {
        return (
            <div className="wrapper">
                <h1>World Clocks</h1>
                <form onSubmit={this.handleSubmit}>
                    <button disabled={!this.state.theTime} className="btn btn-primary">Add Clock</button>
                    <select defaultValue onChange={this.handleChange}>
                        <option value=''>Please Select...</option>
                        {this.handleOption()}
                    </select>
                </form>
            </div>
        )
    }

}

export default ClockForm