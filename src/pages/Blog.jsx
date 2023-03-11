import React from 'react'
import BlogDetails from '../components/blogDetails/BlogDetails'
import RelatedPosts from '../components/relatedPosts/RelatedPosts'
import GoHome from '../components/ui/GoHome'

export default function Blog() {
    return (
        <>
            <GoHome />
            <section className="post-page-container">
                <BlogDetails />
                <aside>
                    <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
                    <RelatedPosts />
                </aside>
            </section>
        </>
    )
}
