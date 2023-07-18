import { configureStore } from "@reduxjs/toolkit";


import eventSlice from "./slices/eventSlice";

const store = configureStore({

    reducer: {
        event: eventSlice,

    },
}


)

export default store;