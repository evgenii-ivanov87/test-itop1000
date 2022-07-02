import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { 
    fetchConvertRequest, 
    fetchConvertSuccess,
    fetchConvertError } 
    from "./convert-actions";

    const items = createReducer(
        [],
       { [fetchConvertSuccess]:(state,{payload})=>[[...state,payload]]});

       
     
export default combineReducers(items)