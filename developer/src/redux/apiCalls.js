import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProjectFailure,
  getProjectStart,
  getProjectSuccess,
  deleteProjectFailure,
  deleteProjectStart,
  deleteProjectSuccess,
  updateProjectFailure,
  updateProjectStart,
  updateProjectSuccess,
  addProjectFailure,
  addProjectStart,
  addProjectSuccess,
} from "./projectRedux";
import { getDeveloperFailure, getDeveloperStart, getDeveloperSuccess } from "./developerRedux";
import { getTaskFailure, getTaskStart, getTaskSuccess } from "./taskRedux";
import { getChoreFailure, getChoreStart, getChoreSuccess, updateChoreFailure, updateChoreStart, updateChoreSuccess } from "./choreRedux";


//auth
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logOut =async(dispatch)=>{
     dispatch(logout());
}

//projects
export const getProjects = async (dispatch) => {
  dispatch(getProjectStart());
  try {
    const res = await userRequest.get("/projects");
    dispatch(getProjectSuccess(res.data));
  } catch (err) {
    dispatch(getProjectFailure());
  }
};

export const deleteProject = async (id, dispatch) => {
  dispatch(deleteProjectStart());
  try {
    // const res = await userRequest.delete(`/Projects/${id}`);
    dispatch(deleteProjectSuccess(id));
  } catch (err) {
    dispatch(deleteProjectFailure());
  }
};

export const updateProject = async (id, Project, dispatch) => {
  dispatch(updateProjectStart());
  try {
    // update
    dispatch(updateProjectSuccess({ id, Project }));
  } catch (err) {
    dispatch(updateProjectFailure());
  }
};
export const addProject = async (Project, dispatch) => {
  dispatch(addProjectStart());
  try {
    const res = await userRequest.post(`/Projects`, Project);
    dispatch(addProjectSuccess(res.data));
  } catch (err) {
    dispatch(addProjectFailure());
  }
};

// Developers

//GET ALL DEVELOPERS
export const getdevelopers = async (dispatch) => {
  dispatch(getDeveloperStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getDeveloperSuccess(res.data));
  } catch (err) {
    dispatch(getDeveloperFailure());
  }
};

//TASKS

//GET TASK BY developer ID
export const getTasks = async (dispatch,id) => {
  dispatch(getTaskStart());
  try {
    const res = await userRequest.get(`/tasks/find/${id}`);
    dispatch(getTaskSuccess(res.data));
  } catch (err) {
    dispatch(getTaskFailure());
  }
};


//Chore

//get chores by task id
export const getChores = async (dispatch, id) => {
  dispatch(getChoreStart());
  try {
    const res = await userRequest.get(`/chores/${id}`);
    dispatch(getChoreSuccess(res.data));
  } catch (err) {
    dispatch(getChoreFailure());
  }
};

export const updateChore = async (id, Chore, dispatch) => {
  dispatch(updateChoreStart());
  try {
    // update
    const res = await userRequest.put(`/chores/${id}`,Chore);
    
    dispatch(updateChoreSuccess(res.data));
  } catch (err) {
    dispatch(updateChoreFailure());
  }
};