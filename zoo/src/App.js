import React from 'react';
import Animal from './Animal';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        }
    }

    handleMessage(n) {
        const newMessage = `You just pet the ${n} !`;
        this.setState({
            message: newMessage
        })
    }

    render() {
        return (
            <div className="container" style={{marginTop:"30px"}}>
                <h1>Petting Zoo</h1>
                <div style={{height:"50px"}}>
                <h2 style={{textAlign:"center", color:"#9ACD32"}}>{this.state.message}</h2>
                </div>
                
                <div style={{marginTop:"50px"}} >
                    <Animal name="Horse" onPetAnimal={(name) => this.handleMessage(name)} />
                    <Animal name="Goat" onPetAnimal={(name) => this.handleMessage(name)} />
                    <Animal name="Sheep" onPetAnimal={(n) => this.handleMessage(n)} />
                    <Animal name="Mouse" onPetAnimal={(name) => this.handleMessage(name)} />
                </div>
            </div>
        )
    }
}

export default App;