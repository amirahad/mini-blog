import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBlogs } from "./blogsAPI"

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    errorMessage: null,
}

export const fetchBlogs = createAsyncThunk(
    'blogs/fetchBlogs',
    async ({filter,sort}) => {
        const blogs = await getBlogs(filter,sort)
        return blogs
    }
)

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.blogs = action.payload
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.error?.message
                state.blogs = []
            })
    }
})

export default blogsSlice.reducer