import React from 'react';


const Animal = (props)=>{
    return(
        <div className="jumbotron" style={{display:"inline-block", margin:"0 20px"}}>
            <h2>{props.name}</h2>
            <hr/>
            <button onClick={()=> props.onPetAnimal(props.name)} className="btn btn-primary">{`Pet the ${props.name}`}</button>
        </div>
    )
}

export default Animal;