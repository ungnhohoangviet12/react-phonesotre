import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions/productActions';
import './userproduct.scss'
import { Card, Col, List, Row } from 'antd';
import Search from 'antd/lib/transfer/search';
import { FaStar } from 'react-icons/fa';



export default function UserProduct() {


    const dispatch = useDispatch();
    const { products } = useSelector(state => state.data)
    console.log(products);

    useEffect(() => {
        dispatch(loadProducts())
    }, [])




    return (
        <div>
            <div className='search'>
                <Row>
                    <Col span={6}>
                        <Search placeholder="nhập tên điện thoại cần tìm" enterButton size='large' danger />
                    </Col>
                    <Col span={6}>
                        <div className='chonloc'>
                            <h3>Tìm kiếm theo giá:</h3>
                            <select name="" id="">
                                <option value="">trên $1000</option>
                                <option value="">từ $300 đến $1000</option>
                                <option value="">dưới $300</option>
                            </select>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='container-userproduct'>

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
                                    {[...Array(5)].map(() => {

                                        return (
                                            <label>

                                                <FaStar
                                                    color="#ffc107"
                                                    className='star' size={15}
                                                />
                                            </label>
                                        )
                                    })}
                                </Card>
                            </List.Item>

                        )}
                    />
                </div>
            </div>

        </div>
    )
}
