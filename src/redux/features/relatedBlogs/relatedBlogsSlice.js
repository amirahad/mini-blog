import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedBlogs } from "./relatedBlogsAPI"

const initialState = {
    relatedBlogs: [],
    isLoading: false,
    isError: false,
    errorMessage: null,
}

export const fetchRelatedBlogs = createAsyncThunk(
    'relatedBlogs/fetchRelatedBlogs',
    async ({ id, tags }) => {
        const relatedBlogs = await getRelatedBlogs(id, tags)
        return relatedBlogs
    }
)

const relatedBlogsSlice = createSlice({
    name: 'relatedBlogs',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedBlogs.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.relatedBlogs = action.payload
            })
            .addCase(fetchRelatedBlogs.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.error?.message
                state.relatedBlogs = []
            })
    }
})

export default relatedBlogsSlice.reducer