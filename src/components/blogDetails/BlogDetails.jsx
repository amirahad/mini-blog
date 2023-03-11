import { useDispatch, useSelector } from 'react-redux'
import { updateLike, updateSavedStatus } from '../../redux/features/blog/blogSlice';

export default function BlogDetails({ blog }) {
    const dispatch = useDispatch()

    const { id, image, description, likes, title, tags, isSaved } = blog || {}

    const handleLikes = () => {
        dispatch(updateLike({ id, updates: { likes: likes + 1 } }));
    };

    const handleSaved = () => {
        dispatch(updateSavedStatus({ id, updates: { isSaved: !isSaved } }));
    }

    return (
        <>
            <main className="post">
                <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
                <div>
                    <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                        {title}
                    </h1>
                    <div className="tags" id="lws-singleTags">
                        {
                            tags?.map(tag => <span className="tag">#{tag}, </span>)
                        }
                    </div>
                    <div className="btn-group">
                        <button className="like-btn" id="lws-singleLinks" onClick={handleLikes} >
                            <i className="fa-regular fa-thumbs-up"></i> {likes}
                        </button>

                        <button className={isSaved ? `active save-btn` : `save-btn`} id="lws-singleSavedBtn" onClick={handleSaved} >
                            <i className="fa-regular fa-bookmark"></i> {isSaved ? `Saved` : `Save`}
                        </button>
                    </div>
                    <div className="mt-6">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </main>

        </>
    )
}
