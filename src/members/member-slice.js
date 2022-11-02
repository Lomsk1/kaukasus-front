import { createSlice } from "@reduxjs/toolkit";
import { getMemberData, getMemberById } from "./member-action";

const membersSlice= createSlice({
    name: "member",
    initialState: {
        memberData: [],
        isLoading: true,
    },
    extraReducers: builder => {
        builder.addCase(getMemberData.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getMemberData.fulfilled, (state, action) => {
            state.memberData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getMemberData.rejected, (state, action) => {
            state.isLoading = false;
        });

        
        builder.addCase(getMemberById.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getMemberById.fulfilled, (state, {payload}) => {
            state.memberData = payload;
            state.isLoading = false;
        });
        builder.addCase(getMemberById.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
})

export default membersSlice.reducer;