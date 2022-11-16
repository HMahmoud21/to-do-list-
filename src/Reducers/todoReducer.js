import { v4 as uuidv4 } from 'uuid';
import { ADD__TODO, CHECKED__TODO, DELETE__TODO, FILTER__TODO } from "../Actions/types"

const initState = [
    {
        id: uuidv4(),
        title: "faire du sport ",
        isDone: false
    },
    {
        id: uuidv4(),
        title: "lire un livre ",
        isDone: false
    },
    {
        id: uuidv4(),
        title: "regarder un film ",
        isDone: false
    }
]

const todoReducer = (state = { initState, filter: "no-filter", save: null }, { type, payload }) => {
    switch (type) {
        case CHECKED__TODO: return {
            ...state, initState: state.initState.map((el) => el.id === payload ? { ...el, isDone: !el.isDone } : el)
        }
        case DELETE__TODO: return {
            ...state, initState: state.initState.filter((el) => el.id !== payload)
        }
        case ADD__TODO: return {
            ...state, initState: [...state.initState, { id: uuidv4(), title: payload, isDone: false }]
        }
        case FILTER__TODO: return {
            ...state, filter: payload
        }
        default: return state
    }
}

export default todoReducer