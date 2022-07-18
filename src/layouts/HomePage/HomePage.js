import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../../components/Header/Header';
import { Content, Footer } from 'antd/lib/layout/layout';
import AppContent from '../../components/List/Content';
import AppFooter from '../../components/Footer/Footer';
import { Routes, Route, Outlet } from 'react-router-dom';
import CartPage from './CartPage';
import AppLogin from '../../pages/Login/Login';
import AppRegister from '../../pages/Register/Register';
import './cartpage.scss'


const { Header } = Layout;

export default function HomePage() {
    return (
        <div>
            <Layout className='mainLayout'>
                <Header>
                    <AppHeader />
                </Header>
                <Content>
                    <Routes>
                        <Route path='' element={<AppContent />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/login' element={<AppLogin />} />
                        <Route path='/register' element={<AppRegister />} />
                    </Routes>
                </Content>
                <Footer>
                    <AppFooter />
                </Footer>
            </Layout>
            <Outlet />
        </div>
    )
}
