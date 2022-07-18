import { Button, Space, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser, loadUsers } from '../../../redux/actions';






const ListProduct = () => {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (window.confirm("Are you sure wanted to delete the user ?")) {
            dispatch(deleteUser(id));
            dispatch(loadUsers());
        }
    }
    const handleEdit = (id) => {
        navigate(`/admin/products/edit/${id}`)
    }
    const dispatch = useDispatch();
    const products = useSelector(state => state.data.users)
    console.log(products);

    useEffect(() => {
        dispatch(loadUsers())
    }, [])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },

        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => {
                return (
                    <Space size="middle">

                        <Button
                            onClick={() => handleEdit(record.id)}
                            type='primary' >Edit</Button>
                        <Button
                            onClick={() => handleDelete(record.id)} type='primary' danger>Delete</Button>
                    </Space>
                )
            }
        },
    ];

    return (
        <div>
            <Button type='primary'><Link to='/admin/products/add'>Add Product</Link></Button>
            <Table columns={columns} dataSource={products} />;
        </div>
    )
}

export default ListProduct;