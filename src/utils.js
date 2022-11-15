export const filterTodos = (list, filter) => {
    switch (filter) {
        case "done": return list.filter((el) => el.isDone === true)
        case "not-done": return list.filter((el) => el.isDone === false)
        case "no-filter":
        default:
            return list
    }
}