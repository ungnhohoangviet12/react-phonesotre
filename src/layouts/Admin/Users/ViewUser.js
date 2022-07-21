import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleUser } from '../../../redux/actions/userActions';
import { Col, Row } from 'antd';


export default function ViewUser() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.data2);
    console.log(user);

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])




    return (
        <div>
            <Col span={16}>
                <Row gutter={[16, 16]}>
                    <Col span={12}>Họ</Col>
                    <Col span={12}>{user.FirstName}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>Tên</Col>
                    <Col span={12}>{user.LastName}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>Email</Col>
                    <Col span={12}>{user.email}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>NickName</Col>
                    <Col span={12}>{user.nickname}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>Số điện thoại</Col>
                    <Col span={12}>0{user.phone}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>Năm sinh</Col>
                    <Col span={12}>{user.year}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>Giới Tính</Col>
                    <Col span={12}>{user.gender}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>Quận / Huyện</Col>
                    <Col span={12}>{user.district}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>Tỉnh / Thành Phố</Col>
                    <Col span={12}>{user.city}</Col>
                </Row>
            </Col>
            <Col span={8}></Col>

        </div>
    )
}
