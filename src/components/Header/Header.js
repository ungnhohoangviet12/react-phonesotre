import { Menu, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'


const { Search } = Input;


export default function AppHeader() {
    return (
        <div>
            <div className="header">
                <div className="logo" >
                    <h3 className='title-header'>Shop store</h3>
                </div>
                <div className='w-400' >
                    <Search placeholder="nhập tên điện thoại cần tìm" enterButton size='large' danger />
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['Home']}
                >
                    <Menu.Item key='Home'><i className="fa-solid fa-house"></i><Link to='/'>Home</Link></Menu.Item>
                    <Menu.Item key='Cart'><i className="fa-solid fa-cart-arrow-down"></i><Link to='/cart'>Cart
                    </Link></Menu.Item>
                    <Menu.Item key='Login'><Link to='/login'>Login</Link></Menu.Item>
                    <Menu.Item key='Register'>
                        <Link to='/register'>Resgiter</Link>
                    </Menu.Item>
                    <Menu.Item key='Logout'>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <Link to='/logout'>Logout</Link>
                    </Menu.Item>
                </Menu>

            </div>

        </div>
    )
}
