import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";
// getGoals, updateGoals, postGoals, deleteGoals;

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  goals: [],
  goal: null,
};

export const createGoal = createAsyncThunk(
  "goal/created",
  async (goalData, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      return await goalService.createGoal(goalData, token);
    } catch (error) {
      const message =
        (error.response && error.response.date && error.reponse.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);
// /Get Goals
export const getGoals = createAsyncThunk("goal/getAll", async (_, thunkApi) => {
  try {
    const token = thunkApi.getState().auth.user.token;
    return await goalService.getGoals(token);
  } catch (error) {
    const message =
      (error.response && error.response.date && error.reponse.data.message) ||
      error.message ||
      error.toString();

    return thunkApi.rejectWithValue(message);
  }
});
/// getGoal
export const getSingleGoal = createAsyncThunk(
  "goal/get",
  async (id, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      return await goalService.getGoal(id, token);
    } catch (error) {
      const message =
        (error.response && error.response.date && error.reponse.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const updateGoal = createAsyncThunk(
  "goals/update",
  async (goalData, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      return await goalService.updateGoal(goalData, token);
    } catch (error) {
      const message =
        (error.response && error.response.date && error.reponse.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteGoal = createAsyncThunk(
  "goals/delete",
  async (id, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      return await goalService.deleteGoal(id, token);
    } catch (error) {
      const message =
        (error.response && error.response.date && error.reponse.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    reset: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = action.payload;
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        );
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goal = action.payload;
      })
      .addCase(getSingleGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase(updateGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
