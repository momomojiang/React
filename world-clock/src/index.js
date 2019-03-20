import React from 'react';
import ReactDOM from 'react-dom';
import ClockForm from './clockForm';
import TimeInfo from './timeInfo';
import './style.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            times: []
        };
    }
    onHandleSubmit(data) {
        this.setState(preState => ({
            times: [...preState.times, { ...data, id: Date.now() }]
        }));
        console.log(data);
    }
    buildTimes() {
        if (this.state.times < 1) {
            return null;
        }
        return this.state.times.map((time) => {
            const { theTime, id } = time;
            return <TimeInfo
                key={id}
                localTime={theTime}
                handleDelete={() => this.deleteTime(id)}
            />
        })
    }
    deleteTime(id) {
        this.setState(prevState => ({
            times: prevState.times.filter(time => time.id !== id)
        }))
    }
    render() {
        return (
            <div className="container">

                <ClockForm onFormSubmit={(data) => this.onHandleSubmit(data)} />
                <hr />
                {this.buildTimes()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))