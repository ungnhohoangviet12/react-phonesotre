import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../redux/actions';
import './userproduct.scss'
import { Button, Card, List, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Search from 'antd/lib/transfer/search';



export default function UserProduct() {


    const dispatch = useDispatch();
    const products = useSelector(state => state.data.users)
    console.log(products);

    useEffect(() => {
        dispatch(loadUsers())
    }, [])




    return (
        <div>
            <div className='mt-100 w-400 ml-100'>
                <Search placeholder="nhập tên điện thoại cần tìm" enterButton size='large' danger />
            </div>
            <div className='container-userproduct'>

                <div className='sibar'>
                    <Menu style={{ height: '1000px' }}
                        defaultSelectedKeys={['Home']}
                    >
                        <Menu.Item key='xiaomi'><Link to='/xiaomi'>Xiaomi</Link></Menu.Item>
                        <Menu.Item key='iphone'><Link to='/xiaomi'>Iphone</Link></Menu.Item>
                        <Menu.Item key='samsung'><Link to='/xiaomi'>Samsung</Link></Menu.Item>
                        <Menu.Item key='oppo'><Link to='/xiaomi'>Oppo</Link></Menu.Item>
                    </Menu>
                </div>
                <div className='content'>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 3,
                            xl: 3,
                            xxl: 3,
                        }}
                        dataSource={products}
                        renderItem={(item) => (
                            <List.Item>

                                <Card title={item.title}
                                    style={{ width: 220 }}
                                    cover={<img alt="example" src={item.image} />}
                                >
                                    <p className='item-name'>{item.name}</p>
                                    <p className='item-price'>{item.price}</p>
                                    <Button type='primary' >Xem chi tiết</Button>
                                </Card>
                            </List.Item>

                        )}
                    />
                </div>
            </div>

        </div>
    )
}
