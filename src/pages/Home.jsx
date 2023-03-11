import React from 'react'
import BlogGrid from '../components/blogGrid/BlogGrid'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

export default function Home() {
    return (
        <>
            <Navbar />
            <section class="wrapper">
                <Sidebar />
                <BlogGrid />
            </section>
        </>
    )
}
