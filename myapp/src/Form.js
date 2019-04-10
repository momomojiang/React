import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }
    handleFormSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state.name)

        this.setState({
            name:""
        })
    }
    render() {
        return (
            <div className="form">
                <form onSubmit={(event)=>this.handleFormSubmit(event)}>
                    <label>GitHub Username: </label>
                    <input type="text" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}></input>
                    <br />
                    <button disabled={this.state.name === ""}>Calculate Github Score</button>
                </form>
            </div>
        )
    }
}

export default Form;