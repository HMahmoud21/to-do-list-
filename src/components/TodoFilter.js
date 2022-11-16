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
                <label>tous</label>
                <input
                    onChange={(e) => dispatch(filterTodo(e.target.value))}
                    type="radio"
                    name="filterTodo"
                    value="done"
                />
                <label>Faite</label>
                <input
                    onChange={(e) => dispatch(filterTodo(e.target.value))}
                    type="radio"
                    name="filterTodo"
                    value="not-done"
                />
                <label>en attente </label>
            </form>
        </div>
    )
}

export default TodoFilter