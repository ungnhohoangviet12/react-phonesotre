import { combineReducers } from 'redux';
import productsReducers from './reducers/productReducer';

const rootReducer = combineReducers({
    data: productsReducers
})

export default rootReducer;