import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchProjectsAsync = createAsyncThunk("projects/fetchProjectsAsync", async (path) => {
  const response = await fetch(path);
  if (response.ok) {
    const responseText = await response.text();
    return responseText;
  }
});

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      let proj = action.payload;
      if (!proj.id) {
        proj.id = Math.round(Math.random() * 100000);
      }
      while (state.some((item) => item.id === proj.id)) {
        ++proj.id;
      }
      state.push(proj);
    },
    updateProject: (state, action) => {
      let i = state.findIndex((item) => item.id === action.payload.id);
      if (i >= 0) state[i] = action.payload;
    },
    deleteProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchProjectsAsync.fulfilled]: (state, action) => {
      const dateRegEx = new RegExp(/^(\d{2})\.(\d{2})\.(\d{4})$/);
      let projects = JSON.parse(action.payload, (key, value) => {
        if (typeof value === "string") {
          if (value === "true") {
            return true;
          } else if (value === "false") {
            return false;
          } else if (value.match(/^\d+$/)) {
            return parseInt(value);
          } else if (value.match(dateRegEx)) {
            let a = value.split(".");
            return `${a[2]}-${a[1]}-${a[0]}`;
          }
        }
        return value;
      });
      return projects;
    },
  },
});

export const { addProject, updateProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
