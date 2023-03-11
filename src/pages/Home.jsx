import BlogGrid from '../components/blogGrid/BlogGrid'
import Sidebar from '../components/sidebar/Sidebar'

export default function Home() {
    return (
        <>
            <section class="wrapper">
                <Sidebar />
                <BlogGrid />
            </section>
        </>
    )
}
