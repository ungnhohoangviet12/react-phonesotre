import React from 'react'
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import { DatePicker } from 'antd';
import './register.scss'

export default function AppRegister() {
    const { Option } = Select;
    const formItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 24,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 24,
            },
        },
    };
    const [form] = Form.useForm();

    const onFinish = (data) => {
        console.log(data.FirstName, data.LastName);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="84">+84</Option>
                <Option value="85">+85</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className='container-form'>
            <h1>Đăng ký</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item name={['FirstName']} rules={[{ required: true }]}>
                    <Input placeholder='hãy nhập họ' />
                </Form.Item>
                <Form.Item name={['LastName']} rules={[{ required: true }]}>
                    <Input placeholder='hãy nhập tên' />
                </Form.Item>

                <Form.Item
                    name="email"

                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input placeholder='hãy nhập email' />
                </Form.Item>

                <Form.Item
                    name="password"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='hãy nhập password' />
                </Form.Item>

                <Form.Item
                    name="confirm"

                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='nhập lại password' />
                </Form.Item>

                <Form.Item
                    name="nickname"

                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder='hãy nhập tên đăng nhập' />
                </Form.Item>


                <Form.Item
                    name="phone"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        placeholder='nhập số điện thoại'
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                        name="year"
                        rules={[{ required: true }]}
                        style={{ display: 'inline-block' }}
                    >
                        <DatePicker style={{ width: 200 }} placeholder='Select Your Birth Day' />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    name="gender"

                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="Giới tính">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item l>
                    <Input.Group compact>
                        <Form.Item
                            name={['district']}
                            noStyle
                            rules={[{ required: true, message: 'District is required' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder="Quận / Huyện" />
                        </Form.Item>
                    </Input.Group>
                </Form.Item>

                <Form.Item >
                    <Input.Group compact>
                        <Form.Item
                            name={['city']}
                            noStyle
                            rules={[{ required: true, message: 'City is required' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder="Tỉnh / Thành Phố" />
                        </Form.Item>
                    </Input.Group>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary"
                        block htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
