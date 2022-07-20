import * as types from '../actionType';
import axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_PRODUCTS,
    payload: users
});

const userDelete = () => ({
    type: types.DELETE_PRODUCTS
})
const userAdd = () => ({
    type: types.ADD_PRODUCTS
})
const getUser = (user) => ({
    type: types.GET_SINGLE_PRODUCTS,
    payload: user,
})
const userUpdate = (user) => ({
    type: types.UPDATE_PRODUCTS,
    payload: user
})


export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_BE_URL}/users`).then((resp) => {
            console.log("resp", resp);
            dispatch(getUsers(resp.data));
        }).catch(error => console.log(error))
    };

};

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_BE_URL}/users/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(userDelete());
            dispatch(loadUsers());
        }).catch(error => console.log(error))
    };

};

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_BE_URL}/users`, user).then((resp) => {
            console.log("resp", resp);
            dispatch(userAdd());
            // dispatch(loadUsers());
        }).catch(error => console.log(error))
    };

};

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_BE_URL}/users/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getUser(resp.data));
        }).catch(error => console.log(error))
    };

};

export const updateUser = (user, id) => {
    console.log(user, id);
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_BE_URL}/users/${id}`, user).then((resp) => {
            console.log("resp", resp);
            dispatch(userUpdate());
        }).catch(error => console.log(error))
    };

};