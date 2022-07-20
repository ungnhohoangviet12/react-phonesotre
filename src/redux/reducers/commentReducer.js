import * as types from '../actionType';


const initialState = {
    users: [],
    user: {},
    loading: true
}

const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case types.DELETE_PRODUCTS:
            return {
                ...state,
                loading: false,
            }
        case types.ADD_PRODUCTS:
            return {
                ...state,
                loading: false
            }
        case types.GET_SINGLE_PRODUCTS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case types.UPDATE_PRODUCTS:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }

}

export default productsReducers