import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions/productActions';
import './userproduct.scss'
import { Card, List, } from 'antd';
import { FaStar, FaCartPlus } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd'


const pageSize = 6;

export default function UserProduct() {

    const [states, setStates] = useState(
        {
            data: [],
            totalPage: 0,
            current: 1,
            minIndex: 0,
            maxIndex: 0
        }
    );


    const { addItem } = useCart();
    const navigate = useNavigate();


    const dispatch = useDispatch();
    const { products } = useSelector(state => state.data)


    useEffect(() => {
        dispatch(loadProducts())
        setStates({
            totalPage: products.length / pageSize,
            minIndex: 0,
            maxIndex: pageSize
        })
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])




    const handleChange = (page) => {
        setStates({
            current: page,
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize
        });
        console.log(states);
    };


    const handleDetails = (id) => {
        navigate(`/product/details/${id}`)

    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: "270px", minHeight: "700px", background: 'white' }}>

            </div>
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
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={products}
                    renderItem={(item, index) =>
                        index >= states.minIndex &&
                        index < states.maxIndex && (
                            <List.Item>

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
                                        <FaCartPlus onClick={() => addItem(item)} color='brown' size={20} ></FaCartPlus>
                                    </div>
                                </Card>
                            </List.Item>

                        )}
                />
                <div style={{ textAlign: 'center' }}>
                    <Pagination pageSize={pageSize}
                        defaultCurrent={2}
                        current={states.current}
                        total={products.length}
                        onChange={handleChange}
                        style={{ bottom: "0px" }} />
                </div>
            </div>

        </div>
    )
}
