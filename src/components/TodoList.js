import React from "react";
import { useSelector } from "react-redux";
import TodoTask from "./TodoTask";
import { filterTodos } from "../utils";

function TodoList() {
    const list = useSelector((state) => state.todo.initState);
    const filter = useSelector((state) => state.todo.filter);

    const finalList = filterTodos(list, filter);

    return (
        <div>
            {finalList.length !== 0 ? (
                <div>
                    {finalList.map((todo, index) => (
                        <TodoTask todo={todo} key={index} />
                    ))}
                </div>
            ) : (
                <p>Your list is empty</p>
            )}
        </div>
    );
}

export default TodoList;