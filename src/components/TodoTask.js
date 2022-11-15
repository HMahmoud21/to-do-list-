import React from 'react'
import { useDispatch } from "react-redux"
import { checkTodo, deleteTodo } from "../Actions/TodoActions"

function TodoTask(props) {
    const { title, id, isDone } = props.todo;
    const dispatch = useDispatch()
    return (
        <div>
            <h1 className={isDone ? "done" : "not-done"}>{title}</h1>
            <button onClick={() => dispatch(checkTodo(id))}>{isDone ? "not done" : "done"}</button>
            <button onClick={() => dispatch(deleteTodo(id))}>delete</button>
            <button>edit</button>
        </div>
    )
}

export default TodoTask