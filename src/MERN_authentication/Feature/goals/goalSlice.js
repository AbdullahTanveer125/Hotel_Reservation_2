import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import goalService from './goalService'

const initialState = {
	goals: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// create goal
export const createGoal = createAsyncThunk("goals/create", async function (goalData, thunkAPI) {
	try{
		const token= thunkAPI.getState().auth.user.token;
		return await goalService.createGoal(goalData, token);
	}catch(error){
		const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString();

		return thunkAPI.rejectWithValue(message);
	}
})


// get All goals
export const getGoals=createAsyncThunk("goals/getAll", async function(_, thunkAPI){
	try{
		const token= thunkAPI.getState().auth.user.token;
		return await goalService.geteGoals(token);
	}catch(error){
		const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString();

		return thunkAPI.rejectWithValue(message);
	}
})



// delete goal
export const deleteGoal = createAsyncThunk("goals/delete", async function (id, thunkAPI) {
	try{
		const token= thunkAPI.getState().auth.user.token;
		return await goalService.deleteGoal(id, token);
	}catch(error){
		const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString();

		return thunkAPI.rejectWithValue(message);
	}
})


export const goalSlice = createSlice({
	name: "goal",
	initialState,
	reducers: {
		reset: function (state) { return initialState }
	},
	extraReducers: function(builder){
		builder
		.addCase(createGoal.pending, function(state){
			state.isLoading=true;
		})
		.addCase(createGoal.fulfilled, function(state, action){
			state.isLoading=false;
			state.isSuccess=true;
			state.goals.push(action.payload);
		})
		.addCase(createGoal.rejected, function(state, action){
			state.isLoading=false;
			state.isError=true;
			state.message=action.payload;
		})
		.addCase(getGoals.pending, function(state){
			state.isLoading=true;
		})
		.addCase(getGoals.fulfilled, function(state, action){
			state.isLoading=false;
			state.isSuccess=true;
			state.goals=action.payload;
		})
		.addCase(getGoals.rejected, function(state, action){
			state.isLoading=false;
			state.isError=true;
			state.message=action.payload;
		})
		.addCase(deleteGoal.pending, function(state){
			state.isLoading=true;
		})
		.addCase(deleteGoal.fulfilled, function(state, action){
			state.isLoading=false;
			state.isSuccess=true;
			state.goals= state.goals.filter(function(goal){
				return goal._id !== action.payload.id;
			});
		})
		.addCase(deleteGoal.rejected, function(state, action){
			state.isLoading=false;
			state.isError=true;
			state.message=action.payload;
		})
		
	}
})




export const { reset } = goalSlice.actions;
export default goalSlice.reducer;