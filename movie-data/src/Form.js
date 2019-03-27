import React from 'react';
import './style.css';

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

    render(){
        return(
            <form className="form-div" onSubmit={(event)=>this.handleFormSubmit(event)}>
                <label>Movie Name: </label>
                <input type="text" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/>
                <button disabled={this.state.name === ""}>Search</button>
            </form>
        )
    }
}


export default Form;