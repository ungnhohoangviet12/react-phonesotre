import { Button, Space, Table } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, loadUsers } from '../../../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';


const ListUsers = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.data2.users)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])


    const handleDeleteUser = (id) => {
        if (window.confirm("Are you sure wanted to delete the product ?")) {
            dispatch(deleteUser(id));
            dispatch(loadUsers());
        }
    }


    const handleView = (id) => {
        navigate(`/admin/users/view/${id}`)
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
                    <Button type='primary' onClick={() => handleView(record.id)}>View</Button>
                    <Button type='primary' danger onClick={() => handleDeleteUser(record.id)}>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={users} />;
        </div>
    )

}

export default ListUsers;