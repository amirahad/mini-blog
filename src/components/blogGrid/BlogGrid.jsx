import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../redux/features/blogs/blogsSlice'
import Loading from '../ui/Loading'
import BlogGridItem from './BlogGridItem'

export default function BlogGrid() {
    const dispatch = useDispatch()
    const { blogs, isLoading, isError, errorMessage } = useSelector(state => state.blogs)

    useEffect(() => {
        dispatch(fetchBlogs())
    }, [dispatch])

    let content

    if (isLoading && !isError) {
        content = <Loading />
    }

    if (isError && !isLoading) {
        content = <div className="col-span-12">{errorMessage}</div>
    }

    if (!isLoading && !isError && blogs?.length === 0) {
        content = <div className="col-span-12">No blogs found</div>
    }

    if (!isLoading && !isError && blogs?.length > 0) {
        content = blogs.map(blog => <BlogGridItem key={blog.id} blog={blog} />)
    }


    return (
        <main className="post-container" id="lws-postContainer">
            {content}
        </main>
    )
}
