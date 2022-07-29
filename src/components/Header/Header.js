import { Row, Col } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../../redux/actions/productActions';
import { actLogout } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import Images from '../../constants/image';



export default function AppHeader() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggIn, profile } = useSelector(state => state.auth)
    const { totalUniqueItems } = useCart();

    const handleSearch = (e) => {
        dispatch(searchProduct(e.target.value))

    }

    const handleLogout = () => {
        dispatch(actLogout())
        navigate('/login')
    }

    const handleProfile = () => {
        navigate('./profile')
    }

    return (
        <div>
            <div className="top">
                <div className="header">
                    <div className="logo" >

                        <h1 className='title-header'>Shop store</h1>
                    </div>
                    <input type="text" placeholder='Tìm kiếm...' onChange={handleSearch} />
                    {isLoggIn && <img onClick={handleProfile} src={profile.avatar} alt="" />}
                    <div className='menu-bar'>
                        <ul>
                            <li><Link to='/' >Trang chủ</Link></li>
                            <li><Link to='/product' >Sản Phẩm</Link></li>
                            <li className='cart'>
                                <Link to='/cart' ><i className="fa-solid fa-cart-arrow-down" ><span className='cart-icon'>{totalUniqueItems}</span></i></Link>
                            </li>
                            {!isLoggIn && <li><Link to='/login' >Đăng Nhập</Link></li>}
                            {isLoggIn && <li onClick={handleLogout}>Đăng xuất</li>}
                        </ul>
                    </div>
                </div >
            </div >
            <div className="bot" >
                <Row gutter={[16, 16]}>
                    <Col span={3}>
                        <span><img width={20} src={Images.phone} alt="" /> Điện thoại</span>
                    </Col>
                    <Col span={3}>
                        <span><img width={20} src={Images.laptop} alt="" />Laptop</span>
                    </Col>
                    <Col span={3}>
                        <span><img width={20} src={Images.tablet} alt="" />Tablet</span>
                    </Col>
                    <Col span={3}>
                        <span><img width={20} src={Images.phukien} alt="" />Phụ kiện</span>
                    </Col>
                    <Col span={3}>
                        <span><img width={20} src={Images.smat} alt="" />Smartwatch</span>
                    </Col>
                    <Col span={3}>
                        <span><img width={20} src={Images.dongho} alt="" />Đồng hồ</span>
                    </Col>
                    <Col span={3}>
                        <span><img width={20} src={Images.pc} alt="" />PC, Máy in</span>
                    </Col>
                    <Col span={3}>
                        <span>Máy cũ giá rẻ</span>
                    </Col>
                </Row>
            </div >
        </div >
    )
}
