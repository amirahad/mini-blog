import axiosInstance from "../../../utils/axios"

export const getBlogs = async (filter, sort) => {

    if (sort === 'newest' && filter === 'all') {
        const response = await axiosInstance.get('/blogs?_sort=createdAt&_order=desc')
        return response?.data
    }

    if (sort === 'newest' && filter === 'saved') {
        const response = await axiosInstance.get('/blogs?isSaved=true&_sort=createdAt&_order=desc')
        return response?.data
    }

    if (filter === "all" && sort === "default") {
        const response = await axiosInstance.get('/blogs')
        return response?.data
    }

    if (filter === "all" && sort === "most_liked") {
        const response = await axiosInstance.get('/blogs?_sort=likes&_order=desc')
        return response?.data
    }

    if (filter === "saved" && sort === "default") {
        const response = await axiosInstance.get('/blogs?isSaved=true')
        return response?.data
    }

    if (filter === "saved" && sort === "most_liked") {
        const response = await axiosInstance.get('/blogs?isSaved=true&_sort=likes&_order=desc')
        return response?.data
    }

}