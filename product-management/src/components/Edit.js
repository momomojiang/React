import React from 'react';
import FormItem from './FormItem';
import formProvider from '../utils/formProvider';
import { MDBBtn } from 'mdbreact';
// import PropTypes from 'prop-types';
import creationFlower from '../static/creation-flower.png';
import {
    withRouter
  } from 'react-router-dom';


class Edit extends React.Component {
    componentWillMount() {
        const { editTarget, setFormValues } = this.props;
        if (editTarget) {
            setFormValues(editTarget);
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const { form: { title, price, imgUrl }, formValid, editTarget } = this.props;
        if (!formValid) {
            alert('Please enter valid information');
            return
        }
        let editType = "Add";
        let apiUrl = "http://localhost:3000/products";
        let method = 'post';
        if (editTarget) {
            editType = "Edit";
            apiUrl = "http://localhost:3000/products/" + editTarget.id;
            method = 'put';
        }
        fetch(apiUrl, {
            method,
            body: JSON.stringify({
                title: title.value,
                price: price.value,
                imgUrl: imgUrl.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.id) {
                    alert(editType + ' Successful');
                    this.props.history.push('/list');
                    return;
                } else {
                    alert(editType + ' Failed');
                }
            })
            .catch((err) => console.error(err));
    }
    render() {
        const { form: { title, price, imgUrl }, onFormChange } = this.props;
        return (
            <div className="creation-div">
                <div className="text-wrapper">
                    <h2 className="creation-h2">Create a New Product</h2>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <p className="h4 text-center mb-4">Write to us</p>
                        <FormItem htmlFor="defaultFormContactNameEx" className="grey-text" label="Title" value={title.valid} error={title.error}>
                            <input
                                type="text"
                                className="form-control"
                                value={title.value}
                                onChange={(e) => onFormChange('title', e.target.value)}
                            />
                        </FormItem>
                        <br />
                        <FormItem htmlFor="defaultFormContactEmailEx" className="grey-text" label="Price" value={price.valid} error={price.error}>
                            <input
                                type="number"
                                min="0"
                                max="999999999"
                                className="form-control"
                                value={price.value}
                                onChange={(e) => onFormChange('price', e.target.value)}
                            />
                        </FormItem>
                        <br />
                        <FormItem htmlFor="defaultFormContactSubjectEx" className="grey-text" label="Image Url" value={imgUrl.valid} error={imgUrl.error}>
                            <input
                                type="url"
                                className="form-control"
                                value={imgUrl.value}
                                onChange={(e) => onFormChange('imgUrl', e.target.value)}
                            />
                        </FormItem>
                        <br />
                        <div className="text-center mt-4">
                            <MDBBtn color="warning" outline type="submit">
                                Send
                                {/* <MDBIcon far icon="paper-plane" className="ml-2" /> */}
                            </MDBBtn>
                        </div>
                    </form>
                </div>
                <img className="creation-flower" src={creationFlower} alt="a flower" ></img>
            </div>
        )
    }

}

// Edit.contextType = {
//     router: PropTypes.object.isRequired
// };

Edit = formProvider({
    imgUrl: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return !!value;
                },
                error: 'Image Url is required'
            }
        ]
    },
    title: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return value.length > 4;
                },
                error: 'Minimum 4 characters'
            }
        ]
    },
    price: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return !!value;
                },
                error: 'Price is required'
            }
        ]
    }
})(Edit);

export default withRouter(Edit);