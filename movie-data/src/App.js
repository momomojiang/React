import React from 'react';
import './style.css';
import axios from 'axios';
import Form from './Form';
import Result from './Result';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            error: null
        }
    }

    // componentWillMount() {
    //     console.log("Will Mount")
    //     axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=8371a9fe&t=unplanned")
    //         .then(response => {
    //             console.log(response)
    //             this.setState({ movie: response.data })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }
    onHandleSubmit(name) {
        this.setState({ movie: null, error: null })
        this.fetchData(name);
    }
    fetchData(name) {
        axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=8371a9fe&t="+name)
            .then(response => {
                console.log(response)
                this.setState({ movie: response.data })
            })
            .catch(error => {
                this.setState({
                    error:"Movie not found"
                })
            })

    }
    movieResult() {
        if (this.state.movie === null) {
            return null;
        }
        return <Result movie={this.state.movie} />
    }
    buildError() {
        if (this.state.error === null) {
            return null;
        }
        return <h3 style={{ color: "red", margindisplay: "inline-block" }}>{this.state.error}</h3>
    }
    render() {
        return (
            <div>
                <h1>Movie Data</h1> 
                {this.buildError()}
                <Form onFormSubmit={(data) => this.onHandleSubmit(data)} />
                {this.movieResult()}
            </div>
        )
    }
}

export default App;