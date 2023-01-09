import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../feartures/user/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})