/* eslint-disable react/prop-types */


import { AiTwotoneEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import AddEventModel from "./AddEventModel.jsx";
import { deleteEvent } from '../Redux/slices/eventSlice.js';
import { useState } from "react";

import { useDispatch } from "react-redux";
const EventCard = ({ event }) => {
    const [isEventModel, setIsAddEventModel] = useState(false)

    const dispatch = useDispatch();
    return (
        <>
            <div className={'event-card min-w-fit p-2 m-4 shadow shadow-black/40 rounded relative'}>
                <div className="edit-delete-icon absolute flex gap-2 text-2xl bg-white right-1">
                    <AiTwotoneEdit className={'cursor-pointer'} onClick={() => setIsAddEventModel(true, event)} />
                    <MdDelete className={'cursor-pointer'} onClick={() => dispatch(deleteEvent(event.id))} />
                </div>
                <div className="details flex flex-col px-2 m-4">
                    <h1 className={'text-lg font-semibold flex line-clamp-1'}>Name:  {event.eventName}</h1>
                    <h1 className={'text-lg font-semibold flex line-clamp-1'}>Type:  {event.eventType}</h1>
                    <h1 className={'text-lg font-semibold flex line-clamp-1'}>Discription:  {event.eventDiscription}</h1>
                    <h1 className={'text-lg font-semibold flex line-clamp-1'}>Organisation:  {event.eventOrganisation}</h1>
                    <h1 className={'text-lg font-semibold flex line-clamp-1'}>Handled By: {event.eventHandledBy}</h1>
                    <h1 className={'text-lg font-semibold flex line-clamp-1'}>Start Date: {new Date(event.eventStartDate).toDateString()}</h1>
                    <h1 className={'text-lg font-semibold flex line-clamp-1'}>End Date: {new Date(event.eventEndDate).toDateString()}</h1>
                    <h1 className={'text-lg font-semibold flex line-clamp-1'}>Sub Events: {event.subEvents}</h1>
                </div>



            </div>
            {
                isEventModel && <AddEventModel setIsAddEventModel={setIsAddEventModel} event={event} />
            }
        </>
    );
};

export default EventCard;