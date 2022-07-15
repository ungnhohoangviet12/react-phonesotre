import { Button, Card, Col, Form, Input, List, Modal, Row } from 'antd';
import React, { useState } from 'react';


const products = [
    {
        id: "1",
        price: "29.99",
        space: "1GB of space",
        user: "1 user",
        suppor: "24/7 support",
        backup: "Nhập GRABMOCA giảm ngay 5% tối đa 400.000 đồng cho sản phẩm trên 5 triệu khi thanh toán qua online 100% ví Moca trên ứng dụng Grab",
        access: "Access from anywhere",
        image: "https://cdn.tgdd.vn/Products/Images/42/246199/TimerThumb/samsung-galaxy-a33-(2).jpg"
    },
    {
        id: "2",
        price: "29.99",
        space: "1GB of space",
        user: "1 user",
        suppor: "24/7 support",
        backup: "Nhập GRABMOCA giảm ngay 5% tối đa 400.000 đồng cho sản phẩm trên 5 triệu khi thanh toán qua online 100% ví Moca trên ứng dụng Grab",
        access: "Access from anywhere",
        image: "https://mondaycareer.com/wp-content/uploads/2020/11/anime-l%C3%A0-g%C3%AC-vampire.jpg"
    },
    {
        id: "3",
        price: "29.99",
        space: "1GB of space",
        user: "1 user",
        suppor: "24/7 support",
        backup: "Nhập GRABMOCA giảm ngay 5% tối đa 400.000 đồng cho sản phẩm trên 5 triệu khi thanh toán qua online 100% ví Moca trên ứng dụng Grab",
        access: "Access from anywhere",
        image: "https://upload.wikimedia.org/wikipedia/vi/5/5e/Itachi_Akatsuki.png"
    },

    {
        id: "4",
        price: "29.99",
        space: "1GB of space",
        user: "1 user",
        suppor: "24/7 support",
        backup: "Nhập GRABMOCA giảm ngay 5% tối đa 400.000 đồng cho sản phẩm trên 5 triệu khi thanh toán qua online 100% ví Moca trên ứng dụng Grab",
        access: "Access from anywhere",
        image: "https://cdn.tgdd.vn/2021/11/CookRecipe/Avatar/thit-heo-nuong-sa-thumbnail.jpg"
    },

    {
        id: "5",
        price: "29.99",
        space: "1GB of space",
        user: "1 user",
        suppor: "24/7 support",
        backup: "Nhập GRABMOCA giảm ngay 5% tối đa 400.000 đồng cho sản phẩm trên 5 triệu khi thanh toán qua online 100% ví Moca trên ứng dụng Grab",
        access: "Access from anywhere",
        image: "https://thaitugafoody.com/wp-content/uploads/2018/07/ga-quay-nguyen-con.jpg"
    },


]

export default function CartPage() {
    const [price, setPrice] = useState(1);


    const handleClickde = () => {
        if (price > 0) {
            setPrice(price - 1)
        }
    }

    const handleClickcre = () => {
        setPrice(price + 1)
    }


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
    return (
        <div>
            <div className='content' style={{ height: '100px', width: '100%' }}>
                <h1 style={{ marginLeft: '100px', color: 'red', fontSize: '2em', fontStyle: 'italic' }}>Shopping Cart</h1>
            </div>
            <div className='container-cart '>
                <List
                    grid={{
                        gutter: 16,
                        column: 1
                    }}
                    dataSource={products}
                    renderItem={(item) => (
                        <Row gutter={[16, 16]}>
                            <Col span={6}>
                                <List.Item>
                                    <Card title={item.title}
                                        style={{ width: 100 }}
                                        cover={<img alt="example" src={item.image} />}
                                    >
                                    </Card>

                                </List.Item>
                            </Col>
                            <Col span={6}>
                                <p className='item-price'>${item.price}</p>
                                <p className='item-space'>{item.space}</p>
                                <p className='item-user'>{item.user}</p>
                                <p className='item-backup'>{item.backup}</p>
                                <p className='item-access'>{item.access}</p>
                            </Col>
                            <Col span={6}><div><Button onClick={handleClickde} >-</Button><Button >{price}</Button ><Button onClick={handleClickcre}>+</Button></div>
                                <Button type='primary' danger >Delete</Button>
                            </Col>
                            <Col span={6}>
                                <p className='item-price'>Giá tiền: {item.price * price}</p>
                            </Col>


                        </Row>

                    )}
                />

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
