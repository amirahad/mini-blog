import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filter: "all",
    sort: "default",
}

const filterSlice = createSlice({
    name: "filterBlogs",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
    }
})

export default filterSlice.reducer
export const { setFilter, setSort } = filterSlice.actions