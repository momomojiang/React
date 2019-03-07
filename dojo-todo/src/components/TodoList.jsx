import React from "react";
import { connect } from 'react-redux';
import guid from "guid";


const todos = [{
    id: guid.raw(),
    text: "Collect wood",
    done: false
}, {
    id: guid.raw(),
    text: "Pick up Brian",
    done: false
},
{
    id: guid.raw(),
    text: "Hiking",
    done: false

}];

const TodoList = ({ _todos = todos }) => (
    <ul>
        {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
);

export default TodoList;