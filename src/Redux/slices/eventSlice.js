import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const eventSlice = createSlice({
    name: "event",
    initialState: {
        eventData: {
            eventStartDate: '',
            eventEndDate: '',
            eventDiscription: '',
            eventHandledBy: '',
            eventOrganisation: '',
            subEvents: '',
            eventType: '',
            eventName: '',
        },
        allEvents: [],
        searchInput: '',
        sortBy: 'latest',
        filterBy: 'all'
    },
    reducers: {

        inputChangeHandler: (state, action) => {
            const { name, value } = action.payload;
            state.eventData = { ...state.eventData, [name]: value }
        },
        addEvent: (state, action) => {
            state.allEvents = [...state.allEvents, { id: uuid(), ...action.payload }];
            state.eventData = {
                eventStartDate: '',
                eventEndDate: '',
                eventDiscription: '',
                eventHandledBy: '',
                eventOrganisation: '',
                subEvents: '',
                eventType: '',
                eventName: '',

            }
            alert("Event Added Succesfully....")
        },
        updateEvent: (state, action) => {
            state.allEvents = state.allEvents.map(event => event.id === action.payload.id ? { id: uuid(), ...action.payload } : event)
            alert("Event Updated Succesfully....");
            state.eventData = {
                eventStartDate: '',
                eventEndDate: '',
                eventDiscription: '',
                eventHandledBy: '',
                eventOrganisation: '',
                subEvents: '',
                eventType: '',
                eventName: '',

            }
        },
        deleteEvent: (state, action) => {
            state.allEvents = state.allEvents.filter(event => event.id !== action.payload)
            alert("Event Deleted Succesfully....");
        },
        updateModel: (state, action) => {
            state.eventData = action.payload;
        },
        emptyEventData: (state) => {
            state.eventData = {
                eventStartDate: '',
                eventEndDate: '',
                eventDiscription: '',
                eventHandledBy: '',
                eventOrganisation: '',
                subEvents: '',
                eventType: '',
                eventName: '',

            }
        },
        searchInputHandler: (state, action) => {
            state.searchInput = action.payload
        },
        sortHandler: (state, action) => {
            state.sortBy = action.payload
        },
        filterHandler: (state, action) => {
            state.filterBy = action.payload
        }
    },


});

export const { filterHandler, sortHandler, inputChangeHandler, addEvent, updateEvent, deleteEvent, searchInputHandler, allEvents, eventData, updateModel, emptyEventData } = eventSlice.actions;

export default eventSlice.reducer;      