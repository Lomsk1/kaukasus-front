import { createSlice } from "@reduxjs/toolkit";
import { getTourDayData, getTourDayById, createTourDay } from "./tourDay-action";

const tourDaySlice = createSlice({
  name: "tourDay",
  initialState: {
    tourDayData: [],
    isLoading: true,
  },
  extraReducers: builder => {
    builder.addCase(getTourDayData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getTourDayData.fulfilled, (state, action) => {
      state.tourDayData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTourDayData.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getTourDayById.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getTourDayById.fulfilled, (state, { payload }) => {
      state.tourDayData = payload;
      state.isLoading = false;
    });
    builder.addCase(getTourDayById.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(createTourDay.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createTourDay.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createTourDay.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default tourDaySlice.reducer;
