import React from 'react';

const NumInput = (props) => {
    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <input type="number" className={formControl} {...props} />
        </div>
    );
}

export default NumInput;