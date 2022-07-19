import { Button, Card, Col, List, Menu, Pagination, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import './content.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../redux/actions';
import image1 from '../../assets/images/anh1.png';
import image2 from '../../assets/images/anh2.png';
import image3 from '../../assets/images/anh3.png';
import image4 from '../../assets/images/anh4.png';


export default function AppContent() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.data.users)
    console.log(products);

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    return (
        <div className="container-fluid content">

            <div className='advertisement'>
                <img src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2022/7/8/637928720848483199_des-top-head-banner.png" alt="" />
            </div>
            <div className='row-content'>
                <Row >
                    <Col span={6}>
                        <img className='img-logo' src={image1} alt="" />
                        <h2>Chỉ giảm online</h2>
                    </Col>
                    <Col span={6}>
                        <img className='img-logo' src={image2} alt="" />
                        <h2>Đồng giá 99k</h2>
                    </Col>
                    <Col span={6}>
                        <img className='img-logo' src={image3} alt="" />
                        <h2>Xả hàng giảm sốc</h2>
                    </Col>
                    <Col span={6}>
                        <img className='img-logo' src={image4} alt="" />
                        <h2>Siêu sale xiaomi</h2>
                    </Col>
                </Row>
            </div>
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
            <div className='xuhuong'>
                <h2>Xu hướng mua sắm</h2>
                <div className='cart'>
                    <div className='item'>
                        <div className='title'>
                            <p>Điện thoại</p>
                            <p className='blue'>Galaxy M Series</p></div>
                    </div>
                    <div className='item'>
                        <div className='title'>
                            <p>Điện thoại</p>
                            <p className='blue'>Galaxy M Series</p></div>
                    </div>
                    <div className='item'>
                        <div className='title'>
                            <p>Điện thoại</p>
                            <p className='blue'>Galaxy M Series</p></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
