import { createSlice } from '@reduxjs/toolkit';

export const resultReducer = createSlice({
  name: 'result',
  initialState: {
    userId: null,
    // store all user answers n result array
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
    updateResultAction: (state, action) => {
      const { checked, trace } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
    resetResultAction: () => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const {
  setUserId,
  pushResultAction,
  updateResultAction,
  resetResultAction,
} = resultReducer.actions;
export default resultReducer.reducer;
