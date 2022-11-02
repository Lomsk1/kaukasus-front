import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Helpers/axios";

export const getTourDayData = createAsyncThunk(
  "tourDay/getTourDayData",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `tour_day/all/${params.id}`
      );
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const getTourDayById = createAsyncThunk(
  "tourDay/getTourDayById",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `tour_day/all/${params.id}`
      );
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const createTourDay = createAsyncThunk(
  "adminDay/createTourDay",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost/kaukasus-travel-api/public/tour-days/add/3",
        params
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const deleteTourDay = createAsyncThunk(
  "adminDay/deleteTourDay",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `http://localhost/kaukasus-travel-api/public/tour-days/delete/${id}`
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const updateTourDay = createAsyncThunk(
  "adminDay/updateTourDay",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `http://localhost/kaukasus-travel-api/public/tour-days/update/${payload.id}`,
        payload.tour
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);
