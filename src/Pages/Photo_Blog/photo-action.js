import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Helpers/axios";


export const getPhotosData= createAsyncThunk(
    "photo/getPhotosData",
    async (params, {rejectWithValue}) => {
        try{
          const {data} = await axios.get(`gallery/`);   
            return data;   
        }catch (err){
            rejectWithValue(err.message)
        }
    }
);

export const deletePhoto = createAsyncThunk(
    "admin/deletePhoto",
    async (id, { rejectWithValue }) => {
      try {
        const { data } = await axios.delete(
         `gallery/delete/${id}/`, 
          );
        return data;
        } catch (error) {
          throw rejectWithValue(error);
        }
    }
);
  

export const CreatePhotoBlog = createAsyncThunk(
    "admin/createPhotoBlog",
    async (params, { rejectWithValue }) => {
      try {
        const { data } = await axios.post(
          "gallery/post/"
          , params, {
            headers: {
              "Content-Type": "application/json",
            }
          });
        return data;
      } catch (error) {
        throw rejectWithValue(error);
      }
    }
);

export const updatePhotoBlog = createAsyncThunk('admin/updatePhotoBlog', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios.put(
      `gallery/put/${payload.id}/`,
      payload.photos
    );
    return data;
  } catch (error) {
    throw rejectWithValue(error);
  }
});
