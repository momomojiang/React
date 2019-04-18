import React from 'react';
import Layout from './Layout';
import Edit from './Edit';
import '../style.css';

class ProductEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        };
    }
    componentWillMount() {
        const productId = this.props.match.params.id
        fetch('http://localhost:3000/products/' + productId)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    product: res
                });
            });
    }
    render() {
        const { product } = this.state;
        return (
            <Layout>
                {
                    product ? <Edit editTarget={product} /> : 'Loading...'
                }
            </Layout>
        );

    }
}

// ProductEdit.contextTypes = {
//     router: React.PropTypes.object.isRequired
// };

export default ProductEdit;
