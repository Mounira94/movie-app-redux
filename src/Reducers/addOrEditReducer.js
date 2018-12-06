const nameReducer = (state = '', action) => {
    if (action.type === "SET_NAME") {
        return action.name
    }
    return ''
}
const ratingReducer = (state = 0, action) => {
    if (action.type === "SET_RatING") {
        return action.rating
    }
    return 0
}
const addOrEditReducer = (state = 'add', action) => {
    if (action.type === 'ADD') {
        return 'add'
    }
    return 'edit'
}
export { addOrEditReducer, nameReducer, ratingReducer }