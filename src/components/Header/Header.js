import { UploadOutlined } from '@ant-design/icons';
import { Menu, Input, Row, Col, message } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../../redux/actions/productActions';

const { Search } = Input;


export default function AppHeader() {
    const dispatch = useDispatch();
    const { isLoggIn } = useSelector(state => state.auth)
    const { totalUniqueItems } = useCart();
    console.log(isLoggIn);


    const handleSearch = (e) => {
        dispatch(searchProduct(e.target.value))

    }

    const handleUser = () => {
        message.success('có cái nồi')
    }

    const remove = () => {
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
                    {isLoggIn && <img onClick={handleUser} width={50} style={{ borderRadius: '50%' }} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />}

                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['Home']}
                        items={isLoggIn ? [
                            {
                                key: '1',
                                icon: <i className="fa-solid fa-house" />,
                                label: (
                                    <Link to='/' >Trang chủ</Link>
                                ),

                            },
                            {
                                key: '2',
                                icon: <i className="fa-solid fa-house" />,
                                label: (
                                    <Link to='/product' >Sản Phẩm</Link>
                                ),
                            },
                            {
                                key: '3',
                                icon: <i className="fa-solid fa-cart-arrow-down" />,
                                label: (
                                    <Link to='/cart' ><span>{totalUniqueItems}</span></Link>
                                ),
                            },
                            {
                                key: '6',
                                icon: <i className="fa-solid fa-right-from-bracket"></i>,
                                label: (
                                    <Link onClick={remove} to='/login' >Đăng xuất</Link>
                                ),

                            },


                        ] : [
                            {
                                key: '1',
                                icon: <i className="fa-solid fa-house" />,
                                label: (
                                    <Link to='/' >Trang chủ</Link>
                                ),

                            },
                            {
                                key: '2',
                                icon: <i className="fa-solid fa-house" />,
                                label: (
                                    <Link to='/product' >Sản Phẩm</Link>
                                ),
                            },
                            {
                                key: '3',
                                icon: <i className="fa-solid fa-cart-arrow-down" />,
                                label: (
                                    <Link to='/cart' ><span>{totalUniqueItems}</span></Link>
                                ),
                            },
                            {
                                key: '4',
                                icon: <UploadOutlined />,
                                label: (
                                    <Link to='/login' >Đăng nhập</Link>
                                ),

                            },
                            {
                                key: '5',
                                icon: <UploadOutlined />,
                                label: (
                                    <Link to='/register' >Đăng ký</Link>
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
