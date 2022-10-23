import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "store/index";
import { Project } from "screens/project-list/list";

interface State {
  projects: Project[];
}
const initialState: State = {
  projects: [],
};
export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
  },
});
const { setProjects } = projectsSlice.actions;
export const refreshProjects = (param: any) => (dispatch: AppDispatch) =>
  fetchPojects(param).then((projects) => dispatch(setProjects(projects)));
