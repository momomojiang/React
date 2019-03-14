import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Clock />
                <App name="Howard" />
                
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

