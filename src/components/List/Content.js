import { Card, List, message } from 'antd';
import React, { useEffect } from 'react';
import './content.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions/productActions';
import { FaStar, FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';



export default function AppContent() {
    const { addItem } = useCart();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector(state => state.data)
    const { search } = useSelector(state => state)
    console.log(search);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    const handleDetails = (id) => {
        navigate(`product/details/${id}`)

    }

    const handleToDetails = (item) => {
        addItem(item)
        message.success("đã thêm vào giỏ hàng")
    }


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
                dataSource={products.filter((item) => {
                    if (search === "") {
                        return item
                    } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                        return item

                    }
                })}
                renderItem={(item, index) => (
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
