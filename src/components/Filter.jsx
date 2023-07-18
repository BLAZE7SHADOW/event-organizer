import { useSelector } from 'react-redux';
import { searchInputHandler, sortHandler, filterHandler } from "../Redux/slices/eventSlice";
import { useDispatch } from "react-redux";
const Filter = () => {
    const searchInput = useSelector(store => store?.event?.searchInput);
    const sortBy = useSelector(store => store?.event?.sortBy);
    const filterBy = useSelector(store => store?.event?.filterBy);
    const dispatch = useDispatch();
    return (
        <div className={'filter flex flex-col sm:flex-row sm:items-center gap-2 sm:border border-black/40 rounded'}>
            <input type="search" className={'rounded px-4 outline-0 py-2'} placeholder={'Search Events...'} value={searchInput} onChange={(e) => dispatch(searchInputHandler(e.target.value))} />
            <div className={'flex items-center gap-4 border-l-2 border-black/60 pl-4'}>
                <p className={'font-bold text-xl'}>Sort:</p>
                <label htmlFor="latest" className={'flex items-center gap-1'}>
                    <input type="radio" name="sort" id="latest" value='latest' checked={sortBy === 'latest'} onChange={(e) => dispatch(sortHandler(e.target.value))} /> Latest
                </label>
                <label htmlFor="oldest" className={'flex items-center gap-1'}>
                    <input type="radio" name="sort" id="oldest" value='oldest' checked={sortBy === 'oldest'} onChange={(e) => dispatch(sortHandler(e.target.value))} /> Oldest
                </label>
            </div>
            <div className={'flex items-center gap-4 border-l-2 border-black/60 pl-4'}>
                <p className={'font-bold text-xl'}>Filters:</p>
                <select name={'eventType'} id="eventType" className={'w-full border border-black/40 p-2 rounded'} value={filterBy} onChange={(e) => dispatch(filterHandler(e.target.value))}>
                    <option value="all">All</option>
                    <option value="Sports">Sports</option>
                    <option value="Music">Music</option>
                    <option value="General">General</option>
                    <option value="Children">Children</option>
                    <option value="School">School</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;