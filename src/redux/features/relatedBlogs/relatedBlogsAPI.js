import axios from "../../../utils/axios";

export const getRelatedBlogs = async (id, tags) => {

    const query = tags.map(tag => `tags_like=${tag}`).join('&')

    const response = await axios.get(`/blogs?${query}&id_ne=${id}`)

    return response?.data
}