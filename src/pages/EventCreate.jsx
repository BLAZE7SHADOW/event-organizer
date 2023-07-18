
import { useSelector } from 'react-redux';
import { inputChangeHandler, addEvent } from "../Redux/slices/eventSlice";
import { useDispatch } from "react-redux";

const EventCreate = () => {
    const dispatch = useDispatch();
    const eventData = useSelector(store => store?.event?.eventData);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addEvent(eventData));

    }

    return (
        <>
            <div className={'flex w-full justify-center items-center mt-5 lg:mt-10'}>
                <div
                    className="recipe-card w-full rounded p-2 px-4 flex flex-col gap-2 pb-4 relative">
                    <h1 className='text-2xl lg:flex lg:justify-center lg:font-bold lg:text-4xl lg:mb-2' >Add Event</h1>
                    <form onSubmit={submitHandler} className={'flex w-full flex-col gap-2 lg:flex-row lg:px-10 lg:justify-center lg:flex-wrap lg:p-6 xl:gap-10 '}>
                        <label htmlFor="" className='lg:w-2/5 flex flex-col md:pl-20 lg:gap-4'> <span className='font-semibold text-xl'>Event Name
                        </span>                          <input required type="text" name={'eventName'} placeholder={'John Doe'}
                            className={'w-full border border-black/40 max-w-[400px] p-2 rounded'} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} value={eventData.eventName} />
                        </label>
                        <label htmlFor="" className='lg:w-2/5 flex flex-col md:pl-20 lg:gap-4'> <span className='font-semibold text-xl'>Event Type
                        </span>                          <select name={'eventType'} id="eventType" className={'w-full border border-black/40 max-w-[400px] p-2 rounded'} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} value={eventData.eventType}>
                                <option value="" disabled>--Select--</option>
                                <option value="Sports">Sports</option>
                                <option value="Music">Music</option>
                                <option value="General">General</option>
                                <option value="Children">Children</option>
                                <option value="School">School</option>
                            </select>

                        </label>
                        <label htmlFor="" className='lg:w-2/5 flex flex-col md:pl-20 lg:gap-4'> <span className='font-semibold text-xl'>Event Start Date</span>
                            <input required type="date" name='eventStartDate' placeholder={'Event Start Date'}
                                className={'w-full border border-black/40 max-w-[400px] p-2 rounded'} value={eventData.eventStartDate} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                        </label>
                        <label htmlFor="" className='lg:w-2/5 flex flex-col md:pl-20 lg:gap-4'> <span className='font-semibold text-xl'>Event End Date</span>
                            <input required type="date" name='eventEndDate' placeholder={'Event End Date'}
                                className={'w-full border border-black/40 max-w-[400px] p-2 rounded'} value={eventData.eventEndDate} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                        </label>
                        <label htmlFor="" className='lg:w-2/5 flex flex-col md:pl-20 lg:gap-4'> <span className='font-semibold text-xl'>Event Discription</span>
                            <input required type="text" name={'eventDiscription'}
                                placeholder={'eg: This is event regarding....'}
                                className={'w-full border border-black/40 max-w-[400px] p-2 rounded'} value={eventData.eventDiscription} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                        </label>
                        <label htmlFor="" className='lg:w-2/5 flex flex-col md:pl-20 lg:gap-4'> <span className='font-semibold text-xl'>Event Handled By</span>
                            <input required type="text" name={'eventHandledBy'}
                                placeholder={'eg: Raju Rastogi'}
                                className={'w-full border border-black/40 max-w-[400px] p-2 rounded'} value={eventData.eventHandledBy} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                        </label>
                        <label htmlFor="" className='lg:w-2/5 flex flex-col md:pl-20 lg:gap-4'> <span className='font-semibold text-xl'>Event Organisation</span>
                            <input required type="text" name={'eventOrganisation'}
                                placeholder={'eg: Rajesh'}
                                className={'w-full border border-black/40 max-w-[400px] p-2 rounded'} value={eventData.eventOrganisation} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                        </label>
                        <label htmlFor="" className='lg:w-2/5 flex flex-col md:pl-20 lg:gap-4'> <span className='font-semibold text-xl'>Total No Of Sub Events</span>
                            <input required type="number" name={'subEvents'}
                                placeholder={'eg: 1'}
                                className={'w-full border border-black/40 max-w-[400px] p-2 rounded'} value={eventData.subEvents} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                        </label>
                        <div className="btn w-full flex justify-center mt-5">
                            <button type={'submit'} className={'bg-red-600 font-semibold text-xl cursor-pointer p-2 rounded text-white min-w-[150px]'}>Submit</button>
                        </div>

                    </form>


                </div>
            </div >
        </>
    )
}

export default EventCreate
