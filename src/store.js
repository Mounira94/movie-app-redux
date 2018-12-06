import {createStore,combineReducers} from 'redux'
import movieReducer from './Reducers/movieReducer'
import  {addOrEditReducer, nameReducer,ratingReducer} from './Reducers/addOrEditReducer'
import {searchReducer,minRate } from './Reducers/searchReducer'
import modalReducer from './Reducers/modalReducer'


const store = createStore(combineReducers({
    movie:movieReducer,
    addOrEdit:addOrEditReducer,
    name:nameReducer,
    rating:ratingReducer,
    search:searchReducer,
    minRate,
    modal:modalReducer


}))

export default store;




