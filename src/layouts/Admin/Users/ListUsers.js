import { Button, Space, Table } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, loadUsers } from '../../../redux/actions/userActions';


const ListUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.data2.users)
    console.log(users);

    useEffect(() => {
        dispatch(loadUsers())
    }, [])


    const handleDeleteUser = (id) => {
        if (window.confirm("Are you sure wanted to delete the product ?")) {
            dispatch(deleteUser(id));
            dispatch(loadUsers());
        }
    }

    const columns = [
        {
            title: 'FirstName',
            "dataIndex": 'FirstName',
            key: 'FirstName',
        },
        {
            title: 'LastName',
            dataIndex: 'LastName',
            key: 'LastName',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'gender',
            key: 'gender',
            dataIndex: 'gender',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => (
                <Space size="middle">
                    <Button type='primary' >View</Button>
                    <Button type='primary' danger onClick={() => handleDeleteUser(record.id)}>Delete</Button>
                </Space>
            ),
        },
    ];

    const handleDelete = () => {
        alert('co cai con cac')
    }
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],

        },

    ];

    return (
        <div>
            <Table columns={columns} dataSource={users} />;
        </div>
    )

}

export default ListUsers;