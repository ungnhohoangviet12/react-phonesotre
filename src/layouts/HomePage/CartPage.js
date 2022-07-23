import { Button, Col, Form, Input, Modal, Radio, Row, Space, Table, RadioChangeEventTarget } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';


export default function CartPage() {
    const { isEmpty, items, totalItems, totalUniqueItems, cartTotal, removeItem, updateItemQuantity, emptyCart } = useCart();
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [value, setValue] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    const columns = [
        {
            title: 'Sản phẩm',
            key: 'product',
            render: (_, record) => (
                <img width={40} src={record.image} alt="" />
            ),
        },
        {
            title: 'Tên',
            key: 'name',
            render: (_, record) => (
                <span className='render-name'>
                    {record.name}
                </span>
            ),
        },


        {
            title: 'Giá',
            key: 'price',
            render: (_, record) => (
                <Space size="middle">
                    <span>
                        {new Intl.NumberFormat('vi').format(record.price * record.quantity)}đ
                    </span>
                </Space>
            ),
        },
        {
            title: 'Số lượng',
            key: 'amount',
            dataIndex: 'amount',
            render: (_, record) => (
                <div className='quantity'>
                    <Button onClick={() => updateItemQuantity(record.id, record.quantity - 1)}>-</Button>
                    <p style={{ margin: '2px 6px' }}>{record.quantity}</p>
                    <Button onClick={() => updateItemQuantity(record.id, record.quantity + 1)}>+</Button>
                </div>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => removeItem(record.id)} type='primary' danger>Delete</Button>
                </Space>
            ),
        },
    ];

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (

        <div>

            <div className='container-cart'>
                {isEmpty ? <h1>Giỏ hàng rỗng</h1> : <h1> số lượng sẩn phẩm: {totalUniqueItems}</h1>
                }
                <h4>Tổng số mặt hàng: {totalItems}</h4>


                <Row gutter={[16, 16]}>
                    <Col className='scroll-product' span={16}>
                        <Table columns={columns} dataSource={items} />
                    </Col>
                    <Col span={2} />
                    <Col className="col-cart" style={{ height: "373px", borderRadius: '20px', }} span={6}>
                        <h2>Tổng giỏ hàng</h2>
                        <div className='sumprice'>
                            <div style={{ height: '70px', marginTop: '20px' }}>
                                <Radio.Group onChange={onChange} value={value}>
                                    <Radio value={1}>Thanh toán trực tiếp</Radio>
                                    <Radio value={2}>Thanh toán online</Radio>
                                </Radio.Group>
                            </div>
                            <h3>Tổng tiền: <span style={{ color: 'red', display: 'inline-block' }} className='cartTotal'>{new Intl.NumberFormat('vi').format(cartTotal)}đ</span></h3>

                            <Button danger onClick={() => emptyCart()}>clear</Button>
                        </div>

                        <Button type='primary' block onClick={showModal}>Thanh toán</Button><br />
                        <Button block onClick={() => navigate("/")}>Tiếp tục mua hàng</Button>
                    </Col>
                </Row>

                <Modal title="Thông tin" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                    >
                        <Form.Item label="Name">
                            <Input placeholder='Nhập họ và tên của bạn' />
                        </Form.Item>
                        <Form.Item label="Address">
                            <Input placeholder='Nhập địa chỉ nhận hàng' />
                        </Form.Item>
                        <Form.Item label="Phone">
                            <Input placeholder='Nhập số điện thoại liên hệ' />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div >
    )
}
