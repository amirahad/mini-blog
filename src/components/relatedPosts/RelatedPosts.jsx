import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedBlogs } from '../../redux/features/relatedBlogs/relatedBlogsSlice'
import Loading from '../ui/Loading'
import RelatedPostItem from './RelatedPostItem'

export default function RelatedPosts({ id, tags }) {
    const dispatch = useDispatch()
    const { relatedBlogs, isLoading, isError, errorMessage } = useSelector(state => state.relatedBlogs)

    useEffect(() => {
        dispatch(fetchRelatedBlogs({ id, tags }))
    }, [dispatch, id, tags])

    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                {isLoading && !isError && <div><Loading /></div>}
                {isError && !isLoading && <div>{errorMessage}</div>}
                {!isLoading && !isError && relatedBlogs?.length === 0 && <div>No related blogs found</div>}
                {relatedBlogs && !isLoading && !isError &&
                    relatedBlogs.map(blog => <RelatedPostItem key={blog.id} blog={blog} />)
                }
            </div>
        </aside>
    )
}
