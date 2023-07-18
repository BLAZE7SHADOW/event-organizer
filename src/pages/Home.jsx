import Filter from "../components/Filter.jsx";
import EventCard from "../components/EventCard.jsx";
import AddEventModel from "../components/AddEventModel.jsx";
import { useState } from "react";
import { useSelector } from 'react-redux';

const Home = () => {
    const [isAddEventModel, setIsAddEventModel] = useState(false);

    const allEvents = useSelector(store => store?.event?.allEvents);
    const searchInput = useSelector(store => store?.event?.searchInput);
    const sortBy = useSelector(store => store?.event?.sortBy);
    const filterBy = useSelector(store => store?.event?.filterBy);

    let filteredData = allEvents.filter(event => event.eventName.toUpperCase().includes(searchInput.toUpperCase()))

    if (filterBy !== 'all') {
        filteredData = allEvents.filter(event => event.eventType === filterBy)
    }

    if (sortBy === 'latest') {
        filteredData = filteredData.sort((event1, event2) => new Date(event1.eventStartDate) - new Date(event2.eventStartDate))
    } else {
        filteredData = filteredData.sort((event1, event2) => new Date(event2.eventStartDate) - new Date(event1.eventStartDate))
    }



    return (
        <>
            <div className={'px-6 py-8'}>
                <Filter />
                <div className="all-recipe pt-6">
                    <h1 className={'text-2xl font-bold mb-8'}>All Events: </h1>
                    <div className="all-recipe flex gap-4 flex-wrap">
                        {
                            filteredData.length ?
                                filteredData.map((event) => (
                                    <EventCard key={event.id} event={event} />
                                )) :
                                <p className="py-12 text-2xl text-black/30 text-center w-full">No Events Added yet</p>
                        }
                    </div>
                </div>
            </div>
            {isAddEventModel && <AddEventModel setIsAddEventModel={setIsAddEventModel} />}
        </>
    );
};

export default Home;