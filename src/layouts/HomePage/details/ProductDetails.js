import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../../redux/actions/productActions';
import { addComment, loadComments } from '../../../redux/actions/commentAction';
import { useParams } from 'react-router-dom';
import './productdetails.scss'
import { Avatar, Button, Col, List, message, Row } from 'antd';
import { AiFillCarryOut, AiTwotoneRedEnvelope, AiOutlineExclamationCircle } from "react-icons/ai";
import { useCart } from 'react-use-cart';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import TextArea from 'antd/lib/input/TextArea';


export default function ProductDetails() {
    const { comments } = useSelector(state => state.comment)


    const [title, setTitle] = useState();
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const { addItem, items } = useCart();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.data);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])




    useEffect(() => {
        dispatch(getSingleProduct(id))
        dispatch(loadComments())
    }, [])

    const handleAddComment = () => {
        if (title) {
            dispatch(addComment({
                ad: product.id,
                title: title
            }))
            dispatch(loadComments())
            setTitle('')
        }
    }

    const handleAddProduct = (product) => {
        addItem(product)
        message.success('thêm thành công')
    }

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
                        <Row>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1

                                return (
                                    <label>
                                        <input
                                            style={{ display: 'none' }}
                                            type="radio"
                                            name="rating"
                                            value={ratingValue}
                                            onClick={() => setRating(ratingValue)}
                                        />
                                        <FaStar
                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "black"}
                                            className='star' size={20}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(null)}
                                        />
                                    </label>
                                )
                            })}
                        </Row>
                        <Row gutter={[16, 16]}>
                            <h2>Bình luận:</h2>
                            <TextArea value={title} placeholder='hãy nêu nhận xét của bạn' cols={45} rows={5} showCount maxLength={100} onChange={(e) => setTitle(e.target.value)} />
                            <Button onClick={handleAddComment} type='primary'>Submit</Button>
                        </Row>
                        <List
                            itemLayout="horizontal"
                            dataSource={comments.filter(s => s.ad === product.id)}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://images.unsplash.com/photo-1610041880800-9a4ec629b1ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />}
                                        title={item.title}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={16}>
                        <Row >
                            <h1 className='title-name'>{product.name}</h1>
                        </Row>
                        <Row>
                            <span className='title-price'>{new Intl.NumberFormat('vi').format(product.price)}đ</span>
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
                                <h3 className='amount-product'>3</h3>
                                <Button>+</Button>
                            </Col>
                        </Row>
                        <Row className='ant-row-6' gutter={[16, 16]}>
                            <Col span={12}>
                                <Button onClick={() => handleAddProduct(product)} type='primary' size="large" block>Thêm vào giỏ hàng</Button>
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
                        <Row className='ant-row-8'>
                            <Col span={12}>
                                <AiTwotoneRedEnvelope size={20} />
                                <span className='sell-app'>Giảm giá khi mua qua app</span>
                            </Col>
                            <Col span={12}><img src="https://media3.scdn.vn/img4/2022/04_14/P8X20So6YTrWe466Xr7v.png" alt="" />Hỏa tốc</Col>
                        </Row>
                        <Row className='ant-row-9'>
                            <Col span={21}>
                                <h3 className='endow'>Quyền lợi khách hàng</h3>
                                <div className='endiw'>
                                    <AiFillSafetyCertificate color='green' size={30} />
                                    <p className='hours'>48 giờ hoàn trả</p>
                                </div>
                            </Col>
                            <Col span={3}>
                                <AiOutlineExclamationCircle size={24} />
                            </Col >
                        </Row>
                        <Row className='ant-row-9'>
                            <h3>Mô tả sản phẩm</h3>
                            <p>
                                Màn hình: LED-backlit IPS LCD4&#34;DVGA Hệ điều hành: iOS 11 Camera sau: 8 MP Camera trước: 1.2 MP Chip: Apple A7 RAM: 1 GB Bộ nhớ trong: 16 GB SIM: 1 Nano SIM Pin, Sạc: 1560 mAh ịphone 5...
                            </p>
                            <h4>Thông tin cơ bản</h4>
                        </Row>
                        <Row className='ant-row-10'>
                            <h4>Đánh giá nhận xét về sản phẩm ( 5 lượt đánh giá )</h4>
                            <div>
                                <FaStar />
                            </div>

                        </Row>

                    </Col>
                </Row>
            </div>

        </div>
    )
}
