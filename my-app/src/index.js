import React from 'react';
import ReactDOM from 'react-dom';
import Jumbo from './Jumbo';

ReactDOM.render(
    <div>
        <Jumbo name="React" description="a cool JS library" />
        <Jumbo name="Angular" description="a cool JS library" />
    </div>,
    document.getElementById("root"))


