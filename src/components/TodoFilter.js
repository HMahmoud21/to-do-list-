import { useDispatch } from "react-redux"
import { filterTodo } from "../Actions/TodoActions"

const TodoFilter = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <form >
                <input
                    onChange={(e) => dispatch(filterTodo(e.target.value))}
                    type="radio"
                    name="filterTodo"
                    value="no-filter"
                />
                <label>All</label>
                <input
                    onChange={(e) => dispatch(filterTodo(e.target.value))}
                    type="radio"
                    name="filterTodo"
                    value="done"
                />
                <label>Done</label>
                <input
                    onChange={(e) => dispatch(filterTodo(e.target.value))}
                    type="radio"
                    name="filterTodo"
                    value="not-done"
                />
                <label>Not Done</label>
            </form>
        </div>
    )
}

export default TodoFilter