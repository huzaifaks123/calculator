// import required toolkit
import { createSlice } from "@reduxjs/toolkit";

// set initial state for reducer
const initialState = {
    initial: "",
    last: "",
    result: "",
    operations:""
}

// create required slice with reducer and actions
const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        setInitial: (state, action) => {
            state.initial = action.payload
        },
        setLast: (state, action) => {
            state.last = action.payload
        },
        setResult: (state, action) => {
            state.result = action.payload
        },
        setOperations:(state,action) => {
            state.operations = action.payload
        }
        
    }
})

// export reducer here
export const displayReducer = displaySlice.reducer;

// export acions here
export const {setInitial, setLast, setResult, setOperations} = displaySlice.actions

// export selector here
export const displaySelector = (state) => state.displayReducer