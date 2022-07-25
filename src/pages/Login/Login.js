import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import './login.scss';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { actLoginSuccess } from '../../redux/actions/authAction';


export default function AppLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.data2.users)
    const { isLoading, notif, isLoggIn } = useSelector((state) => state.auth);


    useEffect(() => {
        dispatch(loadUsers())

    }, [])


    const onFinish = (values) => {
        const find = users.findIndex(todo => (todo.email === values.email && todo.password === values.password))
        if (find !== -1 && users[find].role === false) {
            dispatch(actLoginSuccess({
                profile: values,
                find: users[find].role
            }));
            message.success('đăng nhập thành công')
            navigate('/')

        }
        else if (find !== -1 && users[find].role === true) {
            dispatch(actLoginSuccess({
                profile: values,
                find: users[find].role
            }));
            message.success('đăng nhập thành công')
            navigate('/admin')

        } else {
            alert("bạn đã nhập sai")
        }


    };





    useEffect(() => {
        window.scrollTo(0, 0)
        if (!isLoading && !isLoggIn && notif === 'loginFail') {
            message.info('dang nhap thanh cong');
        } else if (!isLoading && isLoggIn && notif === 'loginSucess') {
            message.info('dang nhap thanh cong');
        }
    }, [isLoading])

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
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
                <h1>Login</h1>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input placeholder='Email đăng nhập' />
                </Form.Item >

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder='mật khẩu' />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 2, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item
                >
                    <Button type="primary" block htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}