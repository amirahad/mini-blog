import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBlog } from "./blogAPI"
//import { updateBlog } from "./blogAPI"

const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    errorMessage: null,
}

export const fetchBlog = createAsyncThunk(
    'blog/fetchBlog',
    async (id) => {
        const blog = await getBlog(id)
        return blog
    }
)


const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        updateLike: (state) => {
            state.blog.likes = state.blog.likes + 1
        },
        updateSavedStatus: (state) => {
            state.blog.isSaved = !state.blog.isSaved
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.blog = action.payload
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.error?.message
                state.blog = {}
            })
    }
})

export default blogSlice.reducer
export const { updateLike, updateSavedStatus } = blogSlice.actions