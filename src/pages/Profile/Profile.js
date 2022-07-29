import React from 'react';
import { Row, Col, Button, Input } from 'antd';
import './profile.scss';
import { useSelector } from 'react-redux';

export default function Profile() {
    const { profile } = useSelector(state => state.auth)
    return (
        <div style={{ marginTop: "100px" }} className='container-profile'>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Row>
                        <h1>Thông tin cá nhân</h1>
                        <Col>
                            <img className='avatar' src={profile.avatar} alt="" />
                        </Col>
                        <Col>
                            <Button type='primary'>Chỉnh sửa thông tin cá nhân</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Input placeholder='chỉnh sửa thông tin cá nhân' />
                    </Row>
                    <h1>{profile.FirstName}</h1>
                    <h1>{profile.LastName}</h1>
                    <h1>{profile.password}</h1>
                    <h1>{profile.year}</h1>
                    <h1>{profile.gender}</h1>
                    <h1>{profile.district}</h1>
                    <h1>{profile.id}</h1>
                    <h1>{profile.role}</h1>
                </Col>
                <Col span={12}></Col>
            </Row>
        </div>
    )
}
