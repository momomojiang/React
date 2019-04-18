import React, { Component } from 'react';
import listflower from '../static/list-flower.png';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentWillMount() {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            });
    }
    handleEdit(product) {
        this.props.history.push('/product/edit/' + product.id);
    }
    handleDelete(product) {
        const confirmed = window.confirm(`Delete ${product.title} ？`);

        if (confirmed) {
            fetch('http://localhost:3000/products/' + product.id, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        products: this.state.products.filter(item => item.id !== product.id)
                    });
                    alert('Delete Successful');
                })
                .catch(err => {
                    console.error(err);
                    alert('Delete Failed')
                });
        }
    }
    render() {
        const { products } = this.state
        return (
            <div className="list-div">
                <img className="list-Flower" src={listflower} alt="flower" />
                <div className="list-h2">
                    <h2>Product List</h2>
                </div>
                <div className="product-wrapper">
                    {products.map((product) => {
                        return (<div className="product" key={product.id}>
                            <img className="list-img" src={product.imgUrl} alt={product.title}></img>
                            <p className="list-title">Title:{product.title} </p>
                            <p>Price:{product.price} </p>
                            <button className="btn-edit" onClick={() => this.handleEdit(product)}>Edit</button>
                            <button className="btn-delt" onClick={() => this.handleDelete(product)}>Delete</button>
                        </div>)
                    })}
                </div>
                <img className="list-Flower2" src={listflower} alt="flower" />

            </div>
        )
    }
}
// List.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
export default List;