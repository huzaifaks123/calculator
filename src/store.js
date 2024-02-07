// import reducer from slice
import { displayReducer } from "./Redux/Reducer/displayReducer";

// import reuqired element to configure store
import { configureStore } from "@reduxjs/toolkit";

// export store to be availble at global state
export const store = configureStore({
    reducer: {
        displayReducer
    }
})
