import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from './components/InfoCard';


const App = (props) =>{
    return(
        <div className="cards container">
            <InfoCard
                imgPath="https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.838x0_q80.jpg"
                title="This is MY!"
                description="Emm...Yummm"
            />

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))