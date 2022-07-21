import { Button, Col, Form, Input, Modal, Row, Space, Table, } from 'antd';
import React, { useState } from 'react';
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
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá',
            key: 'price',
            render: (_, record) => (
                <Space size="middle">
                    <span>
                        {record.price * record.quantity}
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
                    <button onClick={() => updateItemQuantity(record.id, record.quantity - 1)}>-</button>
                    <h3>{record.quantity}</h3>
                    <button onClick={() => updateItemQuantity(record.id, record.quantity + 1)}>+</button>
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

    return (
        <div>
            <div className='container-cart'>

                <Row gutter={[16, 16]}>
                    <Col span={18}>
                        <Table columns={columns} dataSource={items} />
                    </Col>
                    <Col className="col-cart" span={6}>
                        <h2>Tổng giỏ hàng</h2>
                        <div className='sumprice'>
                            <h3>Tổng tiền {totalItems}</h3>
                            <h3>{totalUniqueItems}</h3>
                            <h4>{cartTotal}</h4>
                            <Button onClick={() => emptyCart()}>clear</Button>
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
