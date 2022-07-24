import {
    HomeOutlined,
    UploadOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './admin.scss'
import DashBoard from './DashBoard/DashBoard';
import ListOrders from './Orders/ListOrders';
import AddProduct from './Products/addProducts/AddProduct';
import EditProduct from './Products/editProducts/EditProduct';
import ListProduct from './Products/ListProduct';
import ListUsers from './Users/ListUsers/ListUsers';
import ViewUser from './Users/ViewUser/ViewUser';
import { useNavigate } from 'react-router-dom';
const { Sider, Content } = Layout;

export default function Admin() {
    const navigate = useNavigate();

    const handlelogout = () => {
        localStorage.removeItem('role')
        navigate('/')
    }

    return (
        <Layout>
            <Sider trigger={null} >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: (
                                <Link to='/admin/dashboard' >Dashboard</Link>
                            ),

                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: (
                                <Link to='/admin/Products' >Products</Link>
                            ),
                        },
                        {
                            key: '3',
                            icon: <UserOutlined />,
                            label: (
                                <Link to='/admin/users' >Users</Link>
                            ),
                        },
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: (
                                <Link to='/admin/orders' >Orders</Link>
                            ),

                        },
                        {
                            key: '5',
                            // icon: <UploadOutlined />,
                            label: (
                                < Button onClick={handlelogout}>logout</Button>

                            ),

                        },

                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Routes>
                        <Route path='products' element={<ListProduct />} />
                        <Route path='products/add' element={<AddProduct />} />
                        <Route path='products/edit/:id' element={<EditProduct />} />
                        <Route path='users' element={<ListUsers />} />
                        <Route path='users/view/:id' element={<ViewUser />} />
                        <Route path='orders' element={<ListOrders />} />
                        <Route path='dashboard' element={<DashBoard />} />
                    </Routes>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
