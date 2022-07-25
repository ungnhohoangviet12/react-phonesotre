import { combineReducers } from 'redux';
import productsReducers from './reducers/productReducer';
import usersReducers from './reducers/userReducer';
import searchReducers from './reducers/search';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
    data: productsReducers,
    data2: usersReducers,
    search: searchReducers,
    auth: authReducer
})

export default rootReducer;

