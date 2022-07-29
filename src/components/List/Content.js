import { Card, Col, List, message, Pagination, Row } from 'antd';
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import './content.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions/productActions';
import { FaStar, FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import samsung from '../../assets/images/samsung.webp'


const pageSize = 20;

export default function AppContent() {

    const [states, setStates] = useState(
        {
            totalPage: 0,
            current: 1,
            minIndex: 0,
            maxIndex: 0
        }
    );

    const { addItem } = useCart();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector(state => state.data)
    const { search } = useSelector(state => state)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(loadProducts())
        setStates({
            totalPage: products.length / pageSize,
            minIndex: 0,
            maxIndex: pageSize
        })
    }, [])

    const handleDetails = (id) => {
        navigate(`product/details/${id}`)

    }

    const handleToDetails = (item) => {
        addItem(item)
        message.success("đã thêm vào giỏ hàng")
    }

    const handleChange = (page) => {
        setStates({
            current: page,
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize
        });
        console.log(states);
    };


    return (
        <div className="container-fluid content">
            <div className='content-title'>
                <span className='title'>shopphone</span>
                <span> / Điện thoại - Máy tính bảng</span>
            </div>
            <h1>Bán điện thoại - máy tính bảng</h1>
            <div className='banner'>
                <Row gutter={[16, 16]}>
                    <Col span={18}>
                        <img src="https://didongthongminh.vn/images/slideshow/2022/07/23/slideshow_large/khai-tru%CC%9Bo%CC%9Bng-rg---a%CC%89nh-ba%CC%80i-vie%CC%82%CC%81t--1660-%C3%97-600-px_1658540395.webp" alt="" />
                    </Col>
                    <Col span={6}>
                        <img src={samsung} alt="" />
                        <h3 className='st-name'>Samsung Galaxy S22 Ultra 5G 256GB</h3>
                        <h1 className='st-price-main'>28.990.000₫</h1>
                        <strike>33.990.000₫</strike>
                    </Col>
                </Row>
            </div>
            <List
                grid={{
                    gutter: [16, 16],
                    xs: 3,
                    sm: 3,
                    md: 4,
                    lg: 4,
                    xl: 5,
                    xxl: 5,
                }}


                dataSource={products.filter((item) => {
                    if (search === "") {
                        return item
                    } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                        return item

                    }
                })}
                renderItem={(item, index) =>
                    index >= states.minIndex &&
                    index < states.maxIndex &&
                    (
                        < List.Item key={index}>
                            <Card title={item.title}
                                style={{ width: 220 }}
                                cover={<img className='item-image' onClick={() => handleDetails(item.id)} alt="example" src={item.image} />}
                            >
                                <p className='item-name'>{item.name}</p>
                                <p className='item-price'>{new Intl.NumberFormat('vi').format(item.price)}đ</p>
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
                                    <FaCartPlus onClick={() => handleToDetails(item)} color='brown' size={20} ></FaCartPlus>
                                </div>
                            </Card>
                        </List.Item >

                    )
                }
            />
            <Pagination className='pagination' pageSize={pageSize}
                defaultCurrent={1}
                current={states.current}
                total={products.length}
                onChange={handleChange} />
            <div className='slick'>
                <h1 style={{ color: 'white' }}>SĂN SALE GIÁ SỐC MỖI NGÀY</h1>
                <Slider {...settings}>
                    {products.map((item, index) => (
                        <div key={index} className='item-slick'>
                            <img src={item.image} alt="" />
                            <span></span>
                            <h3 className='name'>{item.name}</h3>
                            <div>
                                <strong className='price'>{new Intl.NumberFormat('vi').format(item.price)}đ</strong>
                                <small>-17%</small>
                            </div>
                            <p className='item-gift'>quà 1.100.000₫</p>
                            <p>
                                <b>4.3</b>
                                <FaStar size={14} color='#fb6e2e' />
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>

            < div className='xuhuong' >
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
            </div >
        </div >
    )
}
