import Guid from 'guid';
import { createStore } from 'redux';

const todos = [{
    //     id: Guid.raw(),
    //     text: "Collect wood",
    //     done: false
    // }, {
    //     id: Guid.raw(),
    //     text: "Pick up Brian",
    //     done: false
    // },
    // {
    id: Guid.raw(),
    text: "Hiking",
    done: false

}];

const defaultState = {
    todos,
    showDone: true
};

const reducer = (state = defaultState, action) => {
    console.log(action);
    const { type, todo, showDone } = action;
    if (type === `SUBMIT_TODO`) {
        state = {
            ...state,
            todos: [...state.todos, todo]// is the same"todo" in TodoInput.jsx line 21
            // basically add new input value from user in the "todos" array
        }
    }
    if (type === `UPDATE_TODO`) {
        state = {
            ...state,
            todos: state.todos.map(_todo => _todo.id === todo.id ? todo : _todo)//we use "_todo" to differentiate it form the "todo" in line 27. old todo:_todo, new todo: todo
        }
    };
    if (type === `SET_SHOW_DONE`) {
        state = {
            ...state,
            showDone
        }
    };

    return state;
};

export default () => createStore(reducer);