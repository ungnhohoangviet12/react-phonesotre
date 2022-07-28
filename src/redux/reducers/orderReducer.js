import * as types from '../actionType';


const initialState = {
    orders: [],
    order: {},
    loading: true
}

const ordersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
            }
        case types.DELETE_ORDERS:
            return {
                ...state,
                loading: false,
            }
        case types.ADD_ORDERS:
            return {
                ...state,
                loading: false
            }
        case types.GET_SINGLE_ORDERS:
            return {
                ...state,
                order: action.payload,
                loading: false
            }
        case types.UPDATE_ORDERS:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }

}

export default ordersReducers