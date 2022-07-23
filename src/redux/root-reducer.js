import { combineReducers } from 'redux';
import productsReducers from './reducers/productReducer';
import usersReducers from './reducers/userReducer';
import searchReducers from './reducers/search';

const rootReducer = combineReducers({
    data: productsReducers,
    data2: usersReducers,
    search: searchReducers
})

export default rootReducer;