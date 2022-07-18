import { Button, Card, List, Menu, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './content.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../redux/actions';


export default function AppContent() {
    const [current, setCurrent] = useState(3);




    const dispatch = useDispatch();
    const products = useSelector(state => state.data.users)
    console.log(products);

    useEffect(() => {
        dispatch(loadUsers())
    }, [])



    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    return (
        <div className="container-fluid content">

            <div className='advertisement'>
                <img src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2022/7/8/637928720848483199_des-top-head-banner.png" alt="" />
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['Home']}
                theme='dark'
            >
                <Menu.Item key='xiaomi'><Link to='/xiaomi'>Xiaomi</Link></Menu.Item>
                <Menu.Item key='iphone'><Link to='/xiaomi'>Iphone</Link></Menu.Item>
                <Menu.Item key='samsung'><Link to='/xiaomi'>Samsung</Link></Menu.Item>
                <Menu.Item key='oppo'><Link to='/xiaomi'>Oppo</Link></Menu.Item>
            </Menu>

            <h2 className='titleHolder title-item'>Sản phẩm mới</h2>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                    xxl: 5,
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
            <h2 className='titleHolder title-item'>Sản phẩm Hot</h2>

            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                    xxl: 5,
                }}
                dataSource={products}
                renderItem={(item) => (
                    <List.Item>

                        <Card title={item.title}
                            style={{ width: 220 }}
                            cover={<img alt="example" src={item.image} />}
                        >
                            <p className='item-name'>{item.name}</p>
                            <p className='item-information'>{item.information}</p>
                            <p className='item-evaluate'>{item.evaluate}</p>
                            <p className='item-price'>{item.price}</p>

                            <Button type='primary' >Xem chi tiết</Button>
                        </Card>
                    </List.Item>
                )}
            />
            <div className="titleHolder">
                <Pagination current={current} onChange={onChange} total={50} />
            </div>
        </div>
    )
}
