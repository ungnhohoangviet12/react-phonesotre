import { Button, Col, Form, Input, Modal, Row, Space, Table, } from 'antd';
import React, { useState } from 'react';


export default function CartPage() {



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
            dataIndex: 'product',
            key: 'product',
            render: (_, record) => (
                <img width={40} src={record.product} alt="" />
            ),
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Số lượng',
            key: 'amount',
            dataIndex: 'amount',
            render: (_, record) => (
                <input type="number" />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' danger>Delete</Button>
                </Space>
            ),
        },
    ];
    const data = [
        {
            product: 'https://images.unsplash.com/photo-1658176057724-dad45dbf7dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
            key: '1',
            name: 'John Brown',
            price: 32,
            amount: 'New York No. 1 Lake Park',
            image: 'vl',
        },
        {
            product: 'https://images.unsplash.com/photo-1658176057724-dad45dbf7dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
            key: '2',
            name: 'John Brown',
            price: 32,
            amount: 'New York No. 1 Lake Park',
            image: 'vl',
        },
        {
            product: 'https://images.unsplash.com/photo-1658176057724-dad45dbf7dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
            key: '3',
            name: 'John Brown',
            price: 32,
            amount: 'New York No. 1 Lake Park',
            image: 'vl',
        },
    ];


    return (
        <div>
            <div className='container-cart'>

                <Row gutter={[16, 16]}>
                    <Col span={18}>
                        <Table columns={columns} dataSource={data} />
                    </Col>
                    <Col className="col-cart" span={6}>
                        <h2>Tổng giỏ hàng</h2>
                        <div className='sumprice'>
                            <h3>Tổng tiền</h3>
                        </div>
                        <Button type='primary' block>Thanh toán</Button><br />
                        <Button block>Tiếp tục mua hàng</Button>
                    </Col>
                </Row>
                <Button style={{ float: 'right' }} type="primary" onClick={showModal}>
                    Mua hàng
                </Button>
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
