import { Button, Space, Table } from 'antd';
import React from 'react';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
    },

    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Button type='primary' >Edit</Button>
                <Button type='primary' danger>Delete</Button>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        price: 32,
        image: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        price: 42,
        image: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        price: 32,
        image: 'Sidney No. 1 Lake Park',
    },


];

const ListProduct = () =>
    <div>
        <Button type='primary'>Add Product</Button>
        <Table columns={columns} dataSource={data} />;
    </div>

export default ListProduct;