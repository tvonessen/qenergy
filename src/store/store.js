import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projects/project.slice";
import authReducer from "./auth/auth.slice";

export default configureStore({
  reducer: {
    projects: projectsReducer,
    auth: authReducer,
  },
});
