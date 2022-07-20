import * as types from '../actionType';
import axios from 'axios';

const getProducts = (users) => ({
    type: types.GET_PRODUCTS,
    payload: users
});

const productDelete = () => ({
    type: types.DELETE_PRODUCTS
})
const productAdd = () => ({
    type: types.ADD_PRODUCTS
})
const getProduct = (user) => ({
    type: types.GET_SINGLE_PRODUCTS,
    payload: user,
})
const productUpdate = (user) => ({
    type: types.UPDATE_PRODUCTS,
    payload: user
})


export const loadProducts = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_BE_URL}/products`).then((resp) => {
            console.log("resp", resp);
            dispatch(getProducts(resp.data));
        }).catch(error => console.log(error))
    };

};

export const deleteProduct = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_BE_URL}/products/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(productDelete());
            dispatch(loadProducts());
        }).catch(error => console.log(error))
    };

};

export const addProduct = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_BE_URL}/products`, user).then((resp) => {
            console.log("resp", resp);
            dispatch(productAdd());
            // dispatch(loadUsers());
        }).catch(error => console.log(error))
    };

};

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_BE_URL}/products/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getProduct(resp.data));
        }).catch(error => console.log(error))
    };

};

export const updateUser = (user, id) => {
    console.log(user, id);
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_BE_URL}/products/${id}`, user).then((resp) => {
            console.log("resp", resp);
            dispatch(productUpdate());
        }).catch(error => console.log(error))
    };

};