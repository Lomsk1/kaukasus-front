import { createSlice } from "@reduxjs/toolkit";
import { getPhotosData, CreatePhotoBlog } from "./photo-action";

const photoSlice= createSlice({
    name: "photo",
    initialState: {
        photoData: [],
        isLoading: true,
    },
    extraReducers: builder => {
        builder.addCase(getPhotosData.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getPhotosData.fulfilled, (state, action) => {
            state.photoData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getPhotosData.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(CreatePhotoBlog.pending, (state, action) => {
            state.isLoading = true;
          });
          builder.addCase(CreatePhotoBlog.fulfilled, (state, action) => {
            state.isLoading = false;
          });
          builder.addCase(CreatePhotoBlog.rejected, (state, action) => {
            state.isLoading = false;
          });
    }
})

export default photoSlice.reducer;