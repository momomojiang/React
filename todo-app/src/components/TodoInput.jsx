import React from "react";
import { connect } from 'react-redux';
import Guid from 'guid';

const TodoInputComponent = ({handleSubmitInput}) => (
    <div>
        <form onSubmit={handleSubmitInput}>
            <input type="text" placeholder="Add a new todo item" />
        </form>
    </div>
);
const mapDispatchToProps = (dispatch) => ({/** this method doesn't get state
                                             passed but it gets dispatch. When 
                                            you call dispatch whatever you pass 
                                            will be passed to the store and 
                                            processed by the reducer*/
    handleSubmitInput(e) {
        e.preventDefault();
        let input = e.target.elements[0];
        let todo = { id: Guid.raw(), text: input.value, done: false };
        dispatch({type:"SUBMIT_TODO",todo});
        input.value = "";
    }
});
export default connect(null,mapDispatchToProps)(TodoInputComponent);