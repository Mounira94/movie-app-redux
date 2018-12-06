export const searchReducer = (state = '', action) => {
    if (action.type === 'SEARCH') {
        return action.search
    }
    return ''
}
export const minRate = (state = 0, action) => {
    if (action.type === 'SET_RATING') {
        return action.rating
    }
    return 0
}

