import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  issues: [
    {
      id: '867843923',
      title: 'React language service performance issue',
      state: 'open',
      url: 'https://api.github',
      created: '2021-04-26T15:43:00Z',
      updated: '2021-04-26T16:09:41Z',
    },
  ],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createIssue: (state, action) => {
      state.issues = [...state.issues, action.payload];
    },
    // updateIssue: (state, action) => {
    //   state.issues = [...state.issues, action.payload];
    // },
    deleteIssue: (state, action) => {
      state.issues = state.issues.filter(
        (issue) => issue.id !== action.payload
      );
    },
  },
});

export const { createIssue, deleteIssue } = dataSlice.actions;
export const selectIssues = (state) => state.data.issues;
export default dataSlice.reducer;
