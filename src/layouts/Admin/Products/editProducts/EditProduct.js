import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, updateUser } from '../../../../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';
// import './login.scss';

export default function EditProduct() {
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.data);


    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user])

    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(id);
        if (!values.name || !values.price || !values.image) {
        } else {
            dispatch(updateUser(values, id));
            navigate('/admin/products');
        }
    };



    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleBack = () => {
        navigate('/admin/products')
    }

    const { name, price, image } = state
    return (
        <div className='container-login'>
            <Form
                name="basic"
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h1>Thay đổi sản phẩm</h1>
                <Form.Item
                    name="name"


                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder='Tên sản phẩm' />
                </Form.Item >

                <Form.Item
                    name="price"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input value={price} placeholder='Giá sản phẩm' />
                </Form.Item>
                <Form.Item
                    name="image"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder='URL ảnh' />
                </Form.Item>
                <Form.Item
                >
                    <Button type="primary" block htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item
                >
                    <Button onClick={handleBack} type="primary" danger>
                        Back
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}