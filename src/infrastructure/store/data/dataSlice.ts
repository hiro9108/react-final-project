import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    syncIssue: (state) => {
      state.issues = [...state.issues];
    },
    createIssue: (state, action) => {
      state.issues = [...state.issues, action.payload];
    },
    updateIssue: (globalState, action) => {
      const {
        id,
        title,
        state,
        url,
        created,
        updated,
        checkId,
      } = action.payload;

      const specificIssue = globalState.issues.find(
        (issue) => issue.id === checkId
      );

      if (specificIssue) {
        specificIssue.id = id;
        specificIssue.title = title;
        specificIssue.state = state;
        specificIssue.url = url;
        specificIssue.created = created;
        specificIssue.updated = updated;
      }
    },
    deleteIssue: (state, action) => {
      state.issues = state.issues.filter(
        (issue) => issue.id !== action.payload
      );
    },
    searchIssues: (state, action) => {
      state.issues = [...action.payload];
    },
  },
});

export const {
  syncIssue,
  createIssue,
  updateIssue,
  deleteIssue,
  searchIssues,
} = dataSlice.actions;

export const selectIssues = (state) => state.data.issues;
export default dataSlice.reducer;
