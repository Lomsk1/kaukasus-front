import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios"
import axios from "../Helpers/axios";


export const getMemberData= createAsyncThunk(
    "member/getMemberData",
    async (params, {rejectWithValue}) => {
        try{
          const {data} = await axios.get(`employees/all/`);   
            return data;   
        }catch (err){
            rejectWithValue(err.message)
        }
    }
);

export const getMemberById= createAsyncThunk(
    'member/getMemberById',
    async (params, {rejectWithValue}) => {
        try{
          const {data} = await axios.get(`employees/${params.id}/`);   
            return data;   
        }catch (err){
            rejectWithValue(err.message)
        }
    }
)