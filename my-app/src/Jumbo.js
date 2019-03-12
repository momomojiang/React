import React from 'react';



const Jumbo = (props) =>{
    const {name, description} = props;
    if(name ==="React"){
        var nameColor = "red";
    }
    return(
        <div className="jumbotron">
            <h1 style={{color:nameColor}}>{name}</h1>
            <p>is {description}</p>
        </div>
    )
}

export default Jumbo;