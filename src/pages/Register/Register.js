import React from 'react'
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import { DatePicker } from 'antd';

export default function AppRegister() {
    const { Option } = Select;
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
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
                span: 16,
                offset: 8,
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
        <div className='container-fluid content w-400'>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item name={['FirstName']} label="FirstName" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['LastName']} label="LastName" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
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
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
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
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="Nickname"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item label="BirthDay" style={{ marginBottom: 0 }}>
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
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Address">
                    <Input.Group compact>
                        <Form.Item
                            name={['address', 'street']}
                            noStyle
                            rules={[{ required: true, message: 'Street is required' }]}
                        >
                            <Input style={{ width: '87%' }} placeholder="Input street" />
                        </Form.Item>
                    </Input.Group>
                </Form.Item>

                <Form.Item label="District">
                    <Input.Group compact>
                        <Form.Item
                            name={['district']}
                            noStyle
                            rules={[{ required: true, message: 'District is required' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder="Input District" />
                        </Form.Item>
                    </Input.Group>
                </Form.Item>

                <Form.Item label="City">
                    <Input.Group compact>
                        <Form.Item
                            name={['city']}
                            noStyle
                            rules={[{ required: true, message: 'City is required' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder="Input City" />
                        </Form.Item>
                    </Input.Group>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary"
                        htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
