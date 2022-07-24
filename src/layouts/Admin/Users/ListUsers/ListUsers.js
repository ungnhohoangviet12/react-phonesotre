import { Button, message, Popconfirm, Space, Table } from 'antd';
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
        dispatch(deleteUser(id));
        dispatch(loadUsers());
        message.success('Xóa thành công');
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
            title: 'role',
            key: 'role',
            dataIndex: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => handleView(record.id)}>View</Button>
                    <Popconfirm
                        title="Bạn có muốn xóa người dùng?"
                        onConfirm={() => handleDeleteUser(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type='primary' danger>Delete</Button>
                    </Popconfirm>
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