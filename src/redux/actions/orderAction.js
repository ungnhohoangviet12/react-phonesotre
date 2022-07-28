import * as types from '../actionType';
import axios from 'axios';

const getOrders = (order) => ({
    type: types.GET_ORDERS,
    payload: order
});

const orderDelete = () => ({
    type: types.DELETE_ORDERS
})
const orderAdd = () => ({
    type: types.ADD_ORDERS
})
const getOrder = (order) => ({
    type: types.GET_SINGLE_ORDERS,
    payload: order,
})
const orderUpdate = (order) => ({
    type: types.UPDATE_ORDERS,
    payload: order
})


export const loadOrders = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_BE_URL}/orders`).then((resp) => {
            console.log("resp", resp);
            dispatch(getOrders(resp.data));
        }).catch(error => console.log(error))
    };

};

export const deleteOrder = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_BE_URL}/orders/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(orderDelete());
            dispatch(loadOrders());
        }).catch(error => console.log(error))
    };

};

export const addOrder = (order) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_BE_URL}/orders`, order).then((resp) => {
            console.log("resp", resp);
            dispatch(orderAdd());
            // dispatch(loadUsers());
        }).catch(error => console.log(error))
    };

};

export const getSingleOrder = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_BE_URL}/orders/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getOrder(resp.data));
        }).catch(error => console.log(error))
    };

};

export const updateOrder = (order, id) => {
    console.log(order, id);
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_BE_URL}/orders/${id}`, order).then((resp) => {
            console.log("resp", resp);
            dispatch(orderUpdate());
        }).catch(error => console.log(error))
    };

};