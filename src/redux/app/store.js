import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import blogReducer from "../features/blog/blogSlice";
import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";
import filterBlogsReducer from "../features/filterBlogs/filterSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        blog: blogReducer,
        relatedBlogs: relatedBlogsReducer,
        filterBlogs: filterBlogsReducer,
    }
})