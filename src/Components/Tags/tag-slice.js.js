import { createSlice } from "@reduxjs/toolkit";
import { createTag, getTags, getTagsById } from "./tag-actions";

const tagSlice = createSlice({
  name: "tag",
  initialState: {
    tagData: [],
    isLoading: true,
  },
  extraReducers: builder => {
    builder.addCase(getTags.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getTags.fulfilled, (state, action) => {
      state.tagData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTags.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getTagsById.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getTagsById.fulfilled, (state, { payload }) => {
      state.tagData = payload;
      state.isLoading = false;
    });
    builder.addCase(getTagsById.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(createTag.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createTag.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createTag.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default tagSlice.reducer;
