import React, { Component } from 'react';
import homeFlower from '../static/home-flower.png';


class Home extends Component {
    render() {
        return (
            <div className="home-div">
                <div className="text-wrapper">
                    <h2 className="home-h2">Home Page</h2><br></br>
                    <p className="home-p">Welcome to the Project Product Management. Here we can manage a set of products. You care able to create new products, remove old products and edit products.</p>
                </div>
                <img className="home-flower" src={homeFlower} alt="a flower" ></img>
            </div>
        )
    }
}
export default Home;