import { Link } from 'react-router-dom'

export default function BlogGridItem({ blog }) {
    const { id, image, createdAt, likes, title, tags, isSaved } = blog || {}
    return (
        <div className="lws-card">
            <Link to={`/blog/${id}`}>
                <img src={image} className="lws-card-image" alt="Top Github Alternatives" />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <Link to={`/blog/${id}`} className="lws-postTitle"> {title} </Link>
                <div className="lws-tags">{tags.map(tag => <span key={tag.index}>{tag}, </span>)}</div>
                <div className="flex gap-2 mt-4">
                    <span className={isSaved ? `lws-badge` : `hidden`}> Saved </span>
                </div>
            </div>
        </div>
    )
}