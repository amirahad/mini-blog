import { Link } from 'react-router-dom'
import mern from '../../assets/images/mern.webp'

export default function BlogGridItem() {
    return (
        <div className="lws-card">
            <Link to='/blog/asdf'>
                <img src={mern} className="lws-card-image" alt="Top Github Alternatives" />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">2023-05-01</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>100</p>
                </div>
                <Link to='/blog/asdf' className="lws-postTitle"> Top Github Alternatives </Link>
                <div className="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
                <div className="flex gap-2 mt-4">
                    <span className="lws-badge"> Saved </span>
                </div>
            </div>
        </div>
    )
}