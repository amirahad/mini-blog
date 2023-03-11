import { useDispatch, useSelector } from "react-redux"
import { setFilter, setSort } from "../../redux/features/filterBlogs/filterSlice"


export default function Sidebar() {
    const dispatch = useDispatch()
    const { filter } = useSelector(state => state.filterBlogs)

    const handlesort = (e) => {
        dispatch(setSort(e.target.value))
    }

    const handlefilter = (e) => {
        dispatch(setFilter(e.target.value))
    }


    return (
        <aside>
            <div className="sidebar-items">
                <div className="sidebar-content">
                    <h4>Sort</h4>
                    <select onChange={handlesort} name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                        <option value="default">Default</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
                </div>
                <div className="sidebar-content">
                    <h4>Filter</h4>
                    <div className="radio-group">
                        <div>
                            <input onChange={handlefilter} value='all' type="radio" name="filter" id="lws-all" checked={filter === 'all'} className="radio" />
                            <label for="lws-all">All</label>
                        </div>
                        <div>
                            <input onChange={handlefilter} value='saved' type="radio" name="filter" id="lws-saved" checked={filter === 'saved'} className="radio" />
                            <label for="lws-saved">Saved</label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
