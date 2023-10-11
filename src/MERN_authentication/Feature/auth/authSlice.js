import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// Register User
export const register=createAsyncThunk("auth/reister", async function(user,thunkAPI){
	try{
		return await authService.register(user);
	}catch(error){
		const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString();

		return thunkAPI.rejectWithValue(message);
	}
})

// login User
export const login=createAsyncThunk("auth/reister", async function(user,thunkAPI){
	try{
		return await authService.login(user);
	}catch(error){
		const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString();

		return thunkAPI.rejectWithValue(message);
	}
})


export const authSlice = createSlice({
	name: 'auth',//slice name
	initialState,
	reducers: {
		reset:function(state){
			state.isError=false
			state.isSuccess=false
			state.isLoading=false
			state.message=""
		},
	},
	extraReducers: function(builder){
		builder
		.addCase(register.pending, function(state){
			state.isLoading=true;
		})
		.addCase(register.fulfilled, function(state,action){
			state.isLoading=false;
			state.isSuccess=true;
			state.user=action.payload;
		})
		.addCase(register.rejected, function(state, action){
			state.isLoading=false;
			state.isError=true;
			state.message=action.payload;
			state.user=null;
		})
		// .addCase(login.pending, function(state){
		// 	state.isLoading=true;
		// })
		// .addCase(login.fulfilled, function(state,action){
		// 	state.isLoading=false;
		// 	state.isSuccess=true;
		// 	state.user=action.payload;
		// })
		// .addCase(login.rejected, function(state, action){
		// 	state.isLoading=false;
		// 	state.isError=true;
		// 	state.message=action.payload;
		// 	state.user=null;
		// })
		.addCase(logout.fulfilled, function(state){
			state.user=null;
		})
	}
})


export const logout= createAsyncThunk("auth/logout", async function(){
	await authService.logout();
}) 










export const {reset}=authSlice.actions;
export default authSlice.reducer;