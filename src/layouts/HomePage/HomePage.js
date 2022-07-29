import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../../components/Header/Header';
import { Content, Footer } from 'antd/lib/layout/layout';
import AppFooter from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
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
                    <Outlet />
                </Content>
                <Footer>
                    <AppFooter />
                </Footer>
            </Layout>
        </div>
    )
}
