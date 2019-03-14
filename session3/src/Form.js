import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state={
            title:"",
            description:"",
            imgPath:""
        }
    }
    handleFormSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state)

        this.setState({
            title:"",
            description:"",
            imgPath:""
        })

    }
    render(){
        return(
            <form onSubmit={(event)=>this.handleFormSubmit(event)}>
                <div>
                    <label htmlFor="title"></label>
                    <input className="form-control" type="text" value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})} />
                </div>
                <div>
                    <label htmlFor="description"></label>
                    <input className="form-control" type="text" value={this.state.description} onChange={(event)=>this.setState({description:event.target.value})} />
                </div>
                <div>
                    <label htmlFor="imgPath"></label>
                    <input className="form-control" type="text" value={this.state.imgPath} onChange={(event)=>this.setState({imgPath:event.target.value})} />
                </div>
                <br/>
                <button>Submit</button>
            </form>
        )
    }

}


export default Form;