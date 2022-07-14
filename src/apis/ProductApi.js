
import axiosClient from "../untils/axiosClient"

export const getAllTasks = async () => {
    const { data } = await axiosClient.get('products', {
        params: {
            _sort: 'id',
            _order: 'desc',
        }
    })
    return data
}

export const deleteTaksById = async (id) => {
    await axiosClient.delete(`products/${id}`)
}

export const createNewTask = async (body) => {
    await axiosClient.post('products', { ...body })
}

export const updateTaskById = async (id, body) => {
    await axiosClient.put(`products/${id}`, {
        ...body
    })
}

export const getTaskById = async id => {
    const { data } = await axiosClient.get(`products/${id}`)
    return data
}