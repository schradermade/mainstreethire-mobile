import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPaginatedSpottis } from '../../api/spotti';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchSpottis = createAsyncThunk(
  'spotti/fetchSpottis',
  async (pagination, thunkAPI) => {
    const { limit, offset } = pagination;
    try {
      await delay(3000);
      const response = await getPaginatedSpottis(limit, offset);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const spottiSlice = createSlice({
  name: 'spotti',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpottis.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSpottis.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          const newSpottis = action.payload.filter(
            (spotti) =>
              !state.data.some(
                (existingSpotti) => existingSpotti.id === spotti.id
              )
          );
          state.data = [...state.data, ...newSpottis];
        } else {
          state.error = 'No data recieved from API';
        }
      })
      .addCase(fetchSpottis.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load Spottis';
      });
  },
});

export default spottiSlice.reducer;
