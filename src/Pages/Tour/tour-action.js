import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Helpers/axios";

export const getTourData = createAsyncThunk(
  "tour/getTourData",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`tours/all/`);
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const getTourById = createAsyncThunk(
  "tour/getTourById",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`tours/${params.id}/`);
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const createTour = createAsyncThunk(
  "admin/createTour",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("tours/post/", params);
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const deleteTour = createAsyncThunk(
  "admin/deleteTour",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`tours/delete/${id}/`);
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const updateTour = createAsyncThunk(
  "admin/updateTour",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `tours/put/${payload.id}/`,
        payload.tour
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const getToursWithFilter = createAsyncThunk(
  "tour/getToursWithFilter",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`filters/${params.id}/`);
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);
