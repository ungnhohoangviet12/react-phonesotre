import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../../redux/actions/productActions';
import { useNavigate, useParams } from 'react-router-dom';
import './productdetails.scss'
import { Button, Col, Result, Row } from 'antd';
import { AiFillCarryOut, AiTwotoneRedEnvelope, AiOutlineExclamationCircle } from "react-icons/ai";
import { useCart } from 'react-use-cart';


export default function ProductDetails() {
    const { addItem, items } = useCart();
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.data);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [])
    return (
        <div className='productDetails'>
            <div className="headers">
                <span>Shopphone /</span>
                <span>Điện thoại - Máy tính bảng /</span>
                <span>Điện thoại cũ /</span>
                <span>Smartphone cũ</span>
            </div>
            <div className='container'>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <img width={340} src={product.image} alt="" />
                    </Col>
                    <Col span={16}>
                        <Row >
                            <h1 className='title-name'>{product.name}</h1>
                        </Row>
                        <Row>
                            <span className='title-price'>{product.price}đ</span>
                        </Row>
                        <Row className='ant-row-4'>
                            <AiFillCarryOut size={16} /> <span className='purchases'>  20 lượt mua</span>
                        </Row>
                        <Row className='ant-row-5'>
                            <Col span={6}>
                                <span className='purchases'>Chọn số lượng:</span>
                            </Col>
                            <Col className='ant-col-4' span={12}>
                                <Button>_</Button>
                                <h3>3</h3>
                                <Button>+</Button>
                            </Col>
                        </Row>
                        <Row className='ant-row-6' gutter={[16, 16]}>
                            <Col span={12}>
                                <Button onClick={() => addItem(items)} type='primary' size="large" block>Thêm vào giỏ hàng</Button>
                            </Col>
                            <Col span={12}>
                                <Button type='primary' size="large" block danger>Mua ngay</Button>
                            </Col>
                        </Row>
                        <Row className='ant-row-7'>
                            <Col span={21}>
                                <span className='endow'>Ưu đãi giành cho bạn</span>
                            </Col>
                            <Col span={3}><AiOutlineExclamationCircle size={24} /></Col>
                        </Row>
                        <Row>
                            <Col span={12}><AiTwotoneRedEnvelope />Giảm giá khi mua qua app</Col>
                            <Col span={12}><img src="https://media3.scdn.vn/img4/2022/04_14/P8X20So6YTrWe466Xr7v.png" alt="" />Hỏa tốc</Col>
                        </Row>
                        <Row className='ant-row-7'>
                            <span className='endow'>Quyền lợi khách hàng</span>
                            <p>48 giờ hoàn trả</p>
                        </Row>
                        <Result
                            status="success"
                            extra={[
                            ]}
                        />
                    </Col>
                </Row>
            </div>

        </div>
    )
}
