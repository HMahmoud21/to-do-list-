import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../Actions/TodoActions'

const TodoAdd = () => {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()
    console.log(todo);
    return (
        <div>
            <input type="text" value={todo} placeholder='add a todo' onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => { dispatch(addTodo(todo)); setTodo("") }}>Add</button>
        </div >
    )
}

export default TodoAdd