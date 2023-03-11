import { Link } from 'react-router-dom'

export default function RelatedPostItem({ blog }) {
    const { id, image, createdAt, title, tags } = blog || {}
    return (
        <div className="card">
            <Link to={`/blog/${id}`}>
                <img src={image} className="card-image" alt={title} />
            </Link>
            <div className="p-4">
                <Link to={`/blog/${id}`} className="text-lg post-title lws-RelatedPostTitle">
                    {title}
                </Link>
                <div className="mb-0 tags">
                    {
                        tags?.map(tag => <span key={tag.index} className="tag">#{tag}, </span>)
                    }
                </div>
                <p>{createdAt}</p>
            </div>
        </div>
    )
}
