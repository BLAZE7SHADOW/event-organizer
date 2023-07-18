/* eslint-disable react/prop-types */
import { GrClose } from 'react-icons/gr'
import { inputChangeHandler, updateEvent, updateModel, emptyEventData } from "../Redux/slices/eventSlice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// eslint-disable-next-line react/prop-types
const AddEventModel = ({ setIsAddEventModel, event }) => {
    const eventData = useSelector(store => store?.event?.eventData);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateEvent(eventData));
        setIsAddEventModel(false)

    }

    useEffect(() => {
        dispatch(updateModel(event));
        return () => {
            dispatch(emptyEventData());
        }
    }, [])

    return (
        <div className={'fixed z-10 inset-0 bg-black/40 flex justify-center items-center mt-4'}>
            <div
                className="recipe-card w-[90%] min-h-[200px] max-h-[80vh] overflow-auto sm:w-96 bg-white rounded p-2 px-4 flex flex-col gap-2 pb-4 relative">
                <div className="close-icon absolute top-2 right-2 cursor-pointer"
                    onClick={() => setIsAddEventModel(false)}><GrClose onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} /></div>
                <h1 className={'text-2xl'}>Add Event</h1>


                <form onSubmit={submitHandler} className={'flex flex-col gap-2'}>
                    <label htmlFor=""> Event Name
                        <input required type="text" name={'eventName'} placeholder={'John Doe'}
                            className={'w-full border border-black/40 p-2 rounded'} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} value={eventData.eventName} />
                    </label>
                    <label htmlFor=""> Event Type

                        <select name={'eventType'} id="eventType" className={'w-full border border-black/40 p-2 rounded'} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} value={eventData.eventType}>
                            <option value="" disabled>--Select--</option>
                            <option value="Sports">Sports</option>
                            <option value="Music">Music</option>
                            <option value="General">General</option>
                            <option value="Children">Children</option>
                            <option value="School">School</option>
                        </select>

                    </label>
                    <label htmlFor=""> Event Start Date
                        <input required type="date" name='eventStartDate' placeholder={'Event Start Date'}
                            className={'w-full border border-black/40 p-2 rounded'} value={eventData.eventStartDate} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                    </label>
                    <label htmlFor=""> Event End Date
                        <input required type="date" name='eventEndDate' placeholder={'Event End Date'}
                            className={'w-full border border-black/40 p-2 rounded'} value={eventData.eventEndDate} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                    </label>
                    <label htmlFor=""> Event Discription
                        <input required type="text" name={'eventDiscription'}
                            placeholder={'eg: This is event regarding....'}
                            className={'w-full border border-black/40 p-2 rounded'} value={eventData.eventDiscription} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                    </label>
                    <label htmlFor=""> Event Handled By
                        <input required type="text" name={'eventHandledBy'}
                            placeholder={'eg: Raju Rastogi'}
                            className={'w-full border border-black/40 p-2 rounded'} value={eventData.eventHandledBy} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                    </label>
                    <label htmlFor=""> Event Organisation
                        <input required type="text" name={'eventOrganisation'}
                            placeholder={'eg: Rajesh'}
                            className={'w-full border border-black/40 p-2 rounded'} value={eventData.eventOrganisation} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                    </label>
                    <label htmlFor=""> Total No Of Sub Events
                        <input required type="number" name={'subEvents'}
                            placeholder={'eg: 1'}
                            className={'w-full border border-black/40 p-2 rounded'} value={eventData.subEvents} onChange={(e) => dispatch(inputChangeHandler({ name: e.target.name, value: e.target.value }))} />
                    </label>

                    <button type={'submit'} className={'bg-red-600 cursor-pointer p-2 rounded text-white'}>Update</button>
                </form>


            </div>
        </div>
    );
};

export default AddEventModel;