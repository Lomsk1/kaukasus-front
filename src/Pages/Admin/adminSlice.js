import { createSlice } from "@reduxjs/toolkit";
import { CreateMember, deleteMember } from "./adminAPI";

const initialState = {
  isLoading: false,
}

const adminSlice = createSlice({
  name: "admin",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(CreateMember.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(CreateMember.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(CreateMember.rejected, (state, action) => {
      state.isLoading = false;
    });


    builder.addCase(deleteMember.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteMember.fulfilled, (state, action) => {
      state.isLoading = false;
    })
    builder.addCase(deleteMember.rejected, (state, action) => {
      state.isLoading = false;
    })
  }
})

export default adminSlice.reducer;