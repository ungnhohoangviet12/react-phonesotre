import { Card, Col, List, Row } from 'antd';
import React, { useEffect } from 'react';
import './content.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions/productActions';
import image1 from '../../assets/images/anh1.png';
import image2 from '../../assets/images/anh2.png';
import image3 from '../../assets/images/anh3.png';
import image4 from '../../assets/images/anh4.png';
import { FaStar } from 'react-icons/fa'


export default function AppContent() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.data.users)
    console.log(products);

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    return (
        <div className="container-fluid content">
            <div className='content-title'>
                <span className='title'>shopphone</span>
                <span> / Điện thoại - Máy tính bảng</span>
            </div>
            <h1>Bán điện thoại - máy tính bảng</h1>
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
                            {/* {[...Array(5)].map(() => {

                                return (
                                    <label>

                                        <FaStar
                                            color="#ffc107"
                                            className='star' size={14}
                                        />
                                    </label>
                                )
                            })} */}
                            <div>
                                <span>189.000đ</span>
                                <span className='price-red'>{item.sale}</span>
                            </div>
                            <div className='hoatoc'>
                                <img src="https://media3.scdn.vn/img4/2022/04_14/P8X20So6YTrWe466Xr7v.png" alt="" />
                                <span>hỏa tốc</span>
                            </div>
                            <div className='sell'>
                                <span>Đã bán {item.sell}</span>
                                <div className='star'>

                                    <span><FaStar color='#ffc600' />5</span>
                                </div>
                            </div>
                        </Card>
                    </List.Item>

                )}
            />

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
                            <div>
                                <span>189.000đ</span>
                                <span className='price-red'>{item.sale}</span>
                            </div>
                            <div className='hoatoc'>
                                <img src="https://media3.scdn.vn/img4/2022/04_14/P8X20So6YTrWe466Xr7v.png" alt="" />
                                <span>hỏa tốc</span>
                            </div>
                            <div className='sell'>
                                <span>Đã bán {item.sell}</span>
                                <div className='star'>

                                    <span><FaStar color='#ffc600' />5</span>
                                </div>
                            </div>
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
