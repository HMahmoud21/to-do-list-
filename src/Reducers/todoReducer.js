import { v4 as uuidv4 } from 'uuid';
import { ADD__TODO, CHECKED__TODO, DELETE__TODO, FILTER__TODO } from "../Actions/types"

const initState = [
    {
        id: uuidv4(),
        title: "Work out at the gym",
        isDone: false
    },
    {
        id: uuidv4(),
        title: "Study for gmc",
        isDone: false
    },
    {
        id: uuidv4(),
        title: "Go out with my friends",
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