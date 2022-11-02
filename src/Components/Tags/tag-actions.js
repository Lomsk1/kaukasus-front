import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Helpers/axios";

export const getTags = createAsyncThunk(
  "tag/getTags",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `tag/get/`
      );
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const getTagsById = createAsyncThunk(
  "tag/getTagsById",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `tag/get/${params.id}/`
      );
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const createTag = createAsyncThunk(
  "tag/createTag",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "tag/post/",
        params
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const deleteTag = createAsyncThunk(
  "tag/deleteTag",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `tag/delete/${id}/`
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const updateTag = createAsyncThunk('tag/updateTag', async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `tag/put/${payload.id}/`,
        payload.tag
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  });