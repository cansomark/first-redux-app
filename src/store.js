import { configureStore } from "@reduxjs/toolkit";
import { reducer, bugAdded, logData, addBug } from "./reducer/reducer";
import api from "./middleware/api";
const store=configureStore({
    reducer: reducer,
    middleware:[api]
   
})
export default store;
export {bugAdded, logData, addBug}