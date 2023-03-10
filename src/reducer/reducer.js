import * as actionType from "../action/actionType";
import {createReducer} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../module/api";
let lastId=0;

const sampleSlice=createSlice({
    name:"bugs",
    initialState:{
        items:[],
        list:[],
        isLoadding:false,
        error:null
    },
    reducers:{
        isLoadding(state,action){
            state.isLoadding=true;
        },
        listBugs(state,action) {
            state.list=action.payload;
            state.isLoadding=false
        },
        bugAdded(state,action){
            state.items.push({
                id:++lastId,
                description:action.payload.description,
                title:action.payload.title,
                resolve:false
            })
        }
    }
})

export const {bugAdded, listBugs, isLoadding}=sampleSlice.actions;
export const reducer=sampleSlice.reducer;

//Action Creator
    //display
    export const logData=()=>actions.API_CALL({
        url:"/bugs",
        onSuccess: listBugs.type,
        onStart: isLoadding.type
    })

    //add
    export const addBug=(bug)=> actions.API_CALL({
            url:"/bugs",
            method:"POST",
            data:bug,
            onSuccess:bugAdded.type
    })
