import todoReducer from './reducers/todo';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: todoReducer
})