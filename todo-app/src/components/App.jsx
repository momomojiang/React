import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import ShowDoneToggle from "./ShowDoneToggle";

const App = () =>(
    <div>
        <h1>
            Todos
        </h1>
        <TodoList/>
        <TodoInput/>
        <ShowDoneToggle />
    </div>
)

export default App;