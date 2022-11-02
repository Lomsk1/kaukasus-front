import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Helpers/axios";

export const CreateMember = createAsyncThunk(
  "admin/createMember",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("employees/post/", params, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(params);
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const deleteMember = createAsyncThunk(
  "admin/deleteMember",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`employees/delete/${id}/`);
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const updateMember = createAsyncThunk(
  "admin/updateMember",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `employees/put/${payload.id}/`,
        payload.membersAdd
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);
