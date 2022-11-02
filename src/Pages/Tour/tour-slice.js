import { createSlice } from "@reduxjs/toolkit";
import { getTourData, getTourById, createTour, getToursWithFilter } from "./tour-action";

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    tourData: [],
    isLoading: true,
    filterData: [],
    filterLoading : true
  },
  extraReducers: builder => {
    builder.addCase(getTourData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getTourData.fulfilled, (state, action) => {
      state.tourData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTourData.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getTourById.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getTourById.fulfilled, (state, { payload }) => {
      state.tourData = payload;
      state.isLoading = false;
    });
    builder.addCase(getTourById.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(createTour.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createTour.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createTour.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getToursWithFilter.pending, state => {
      state.filterLoading = true;
    });
    builder.addCase(getToursWithFilter.fulfilled, (state, action) => {
      state.filterData = action.payload;
      state.filterLoading = false;
      state.isLoading = true;
    });
    builder.addCase(getToursWithFilter.rejected, (state, action) => {
      state.filterLoading = false;
    });

  },
});

export default tourSlice.reducer;
