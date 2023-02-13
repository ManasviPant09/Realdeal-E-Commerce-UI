import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    password: null,
    confirmpassword: null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        register:(state,action)=>{
            state.user = action.payload;
        },
    },
})
export const {register} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;