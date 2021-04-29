import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  issues: [
    {
      id: '867843923',
      title: 'React language service performance issue',
      state: 'open',
      url: 'https://api.github/dfsdf',
      created: '2021-04-26T15:43:00Z',
      updated: '2021-04-26T16:09:41Z',
    },
    {
      id: '1qazxsw2',
      title: 'javascript language service performance issue',
      state: 'close',
      url: 'https://api.github/aaaa',
      created: '1021-04-26T15:43:00Z',
      updated: '3021-04-26T16:09:41Z',
    },
    {
      id: 'dfsaffads',
      title: 'typescript language service performance issue',
      state: 'open',
      url: 'https://api.github/bbbb',
      created: '2022-04-26T15:43:00Z',
      updated: '2024-04-26T16:09:41Z',
    },
  ],
};

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
