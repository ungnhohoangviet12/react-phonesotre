import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser } from '../../../redux/actions/productActions';
import { useNavigate, useParams } from 'react-router-dom';


export default function ProductDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.data);
    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])
    return (
        <div>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.price}</h1>
            <img src={user.image} alt="" />
        </div>
    )
}
