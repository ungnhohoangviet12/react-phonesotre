import { combineReducers } from 'redux';
import productsReducers from './reducers/productReducer';
import usersReducers from './reducers/userReducer';

const rootReducer = combineReducers({
    data: productsReducers,
    data2: usersReducers
})

export default rootReducer;