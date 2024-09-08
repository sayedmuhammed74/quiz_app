import { createSlice } from '@reduxjs/toolkit';

// create reducer
export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  //   allows you to dipatch and action
  // actions allow you to change the value of the store otherwise you can't change it
  reducers: {
    startExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions, // payload is user input value
        answers,
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  resetAllAction,
} = questionReducer.actions;

export default questionReducer.reducer;
