import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BlogDetails from '../components/blogDetails/BlogDetails'
import RelatedPosts from '../components/relatedPosts/RelatedPosts'
import GoHome from '../components/ui/GoHome'
import Loading from '../components/ui/Loading'
import { fetchBlog } from '../redux/features/blog/blogSlice'

export default function Blog() {
    const dispatch = useDispatch()
    const { blog, isError, isLoading, errorMessage } = useSelector(state => state.blog)
    //console.log(blog)

    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchBlog(id))
    }, [dispatch, id])

    return (
        <>
            <GoHome />
            <section className="post-page-container">
                {isLoading && !isError && <Loading />}
                {isError && !isLoading && <div>{errorMessage}</div>}
                {blog && !isLoading && !isError &&
                    <BlogDetails blog={blog} />
                }

                <RelatedPosts id={blog.id} tags={blog.tags} />
            </section>
        </>
    )
}
