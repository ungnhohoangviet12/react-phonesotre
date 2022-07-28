import { Button, Space, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrders, deleteOrder } from '../../../redux/actions/orderAction';
import { message } from 'antd';


const ListOrders = () => {
    const { orders } = useSelector(state => state.order)
    console.log(orders);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadOrders())
    }, [])
    const handleDelete = (id) => {
        dispatch(deleteOrder(id))
        dispatch(loadOrders());
        message.success('Xóa thành công');
    }
    const columns = [
        {
            title: 'Số lượng sản phẩm',
            dataIndex: 'amount',
            key: 'amount',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Tổng tiền',
            key: 'total',
            render: (text, record, index) => {
                return (
                    <li>{new Intl.NumberFormat('vi').format(record.total)}đ</li>
                )
            }
        },
        {
            title: 'Tên người dùng',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Ngày order',
            key: 'day',
            dataIndex: 'day',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' >Xem</Button>
                    <Button onClick={() => handleDelete(record.id)} type='primary' danger>Xóa</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={orders} />;
        </div>
    )

}
export default ListOrders;