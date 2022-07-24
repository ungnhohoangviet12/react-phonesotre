import { UploadOutlined } from '@ant-design/icons';
import { Menu, Input, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './header.scss';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../redux/actions/productActions';
import { loadUsers } from '../../redux/actions/userActions';


const { Search } = Input;


export default function AppHeader() {
    const dispatch = useDispatch();
    const { totalUniqueItems } = useCart();


    const handleSearch = (e) => {
        dispatch(searchProduct(e.target.value))

    }

    const role = localStorage.getItem('role');

    const remove = () => {
        localStorage.removeItem("role");
    }

    return (

        <div>
            <div className="top">
                <div className="header">
                    <div className="logo" >
                        <h3 className='title-header'>Shop store</h3>
                    </div>
                    <div className='w-400' >
                        <Search onChange={handleSearch} placeholder="Tìm kiếm trên Shopphone" enterButton size='large' />
                    </div>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['Home']}
                        items={role === "user" ? [
                            {
                                key: '1',
                                icon: <i className="fa-solid fa-house" />,
                                label: (
                                    <Link to='/' >Home</Link>
                                ),

                            },
                            {
                                key: '2',
                                icon: <i className="fa-solid fa-house" />,
                                label: (
                                    <Link to='/product' >Product</Link>
                                ),
                            },
                            {
                                key: '3',
                                icon: <i className="fa-solid fa-cart-arrow-down" />,
                                label: (
                                    <Link to='/cart' >Cart <span>{totalUniqueItems}</span></Link>
                                ),
                            },
                            {
                                key: '6',
                                icon: <i className="fa-solid fa-right-from-bracket"></i>,
                                label: (
                                    <Link onClick={remove} to='/login' >Logout</Link>
                                ),

                            },


                        ] : [
                            {
                                key: '1',
                                icon: <i className="fa-solid fa-house" />,
                                label: (
                                    <Link to='/' >Home</Link>
                                ),

                            },
                            {
                                key: '2',
                                icon: <i className="fa-solid fa-house" />,
                                label: (
                                    <Link to='/product' >Product</Link>
                                ),
                            },
                            {
                                key: '3',
                                icon: <i className="fa-solid fa-cart-arrow-down" />,
                                label: (
                                    <Link to='/cart' >Cart <span>{totalUniqueItems}</span></Link>
                                ),
                            },
                            {
                                key: '4',
                                icon: <UploadOutlined />,
                                label: (
                                    <Link to='/login' >Login</Link>
                                ),

                            },
                            {
                                key: '5',
                                icon: <UploadOutlined />,
                                label: (
                                    <Link to='/register' >Register</Link>
                                ),

                            },

                        ]}
                    />
                </div >

            </div >
            <div className="bot" >
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <h4>Điện thoại cũ</h4>
                    </Col>
                    <Col span={6}>
                        <h4>Điện thoại mới</h4>
                    </Col>
                    <Col span={6}>
                        <h4>Máy tính</h4>
                    </Col>
                    <Col span={6}>
                        <h4>Tai nghe</h4>
                    </Col>
                </Row>
            </div >
        </div >
    )
}
