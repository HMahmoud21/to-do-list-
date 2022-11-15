import { ADD__TODO, CHECKED__TODO, DELETE__TODO, FILTER__TODO } from "./types"

export const checkTodo = (todoId) => {
    return {
        type: CHECKED__TODO,
        payload: todoId
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE__TODO,
        payload: todoId
    }
}

export const addTodo = (newTodo) => {
    return {
        type: ADD__TODO,
        payload: newTodo
    }
}

export const filterTodo = (filterValue) => {
    return {
        type: FILTER__TODO,
        payload: filterValue
    }
}