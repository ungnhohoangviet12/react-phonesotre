import { Button, Space, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct, loadProducts } from '../../../redux/actions/productActions';
import './listproduct.scss';


const ListProduct = () => {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (window.confirm("Are you sure wanted to delete the product ?")) {
            dispatch(deleteProduct(id));
            dispatch(loadProducts());
        }
    }
    const handleEdit = (id) => {
        navigate(`/admin/products/edit/${id}`)
    }
    const dispatch = useDispatch();
    const products = useSelector(state => state.data.products)
    console.log(products);

    useEffect(() => {
        dispatch(loadProducts())
    }, [])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Image',
            key: 'image',
            render: (text, record, index) => {
                return (
                    <img src={record.image} alt='' width={50} />
                )
            }
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