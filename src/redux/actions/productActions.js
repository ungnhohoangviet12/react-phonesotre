import * as types from '../actionType';
import axios from 'axios';

const getProducts = (products) => ({
    type: types.GET_PRODUCTS,
    payload: products
});

const productDelete = () => ({
    type: types.DELETE_PRODUCTS
})
const productAdd = () => ({
    type: types.ADD_PRODUCTS
})
const getProduct = (product) => ({
    type: types.GET_SINGLE_PRODUCTS,
    payload: product,
})
const productUpdate = (product) => ({
    type: types.UPDATE_PRODUCTS,
    payload: product
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

export const addProduct = (product) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_BE_URL}/products`, product).then((resp) => {
            console.log("resp", resp);
            dispatch(productAdd());
            // dispatch(loadUsers());
        }).catch(error => console.log(error))
    };

};

export const getSingleProduct = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_BE_URL}/products/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getProduct(resp.data));
        }).catch(error => console.log(error))
    };

};

export const updateProduct = (product, id) => {
    console.log(product, id);
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_BE_URL}/products/${id}`, product).then((resp) => {
            console.log("resp", resp);
            dispatch(productUpdate());
        }).catch(error => console.log(error))
    };

};