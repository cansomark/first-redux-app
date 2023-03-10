import * as action from "./actionType";
import { createAction } from "@reduxjs/toolkit";

export const BugAdded=createAction(action.BUG_ADDED)
export const BugResolve=createAction(action.BUG_RESOLVED);
export const bugDisplay=createAction(action.BUG_DISPLAY,{
    url:"/bugs",     
    onSuccess:'apiReceive',
});
