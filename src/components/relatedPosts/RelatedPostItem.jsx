import { Link } from 'react-router-dom'
import ai from '../../assets/images/ai.jpg'

export default function RelatedPostItem() {
    return (
        <div className="card">
            <Link to='/blog/asdf'>
                <img src={ai} className="card-image" alt="" />
            </Link>
            <div className="p-4">
                <Link to='/blog/asdf' className="text-lg post-title lws-RelatedPostTitle">
                    Top Github Alternatives
                </Link>
                <div className="mb-0 tags">
                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <p>2010-03-27</p>
            </div>
        </div>
    )
}
