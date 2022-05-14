import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
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
import {
  getDeveloperFailure,
  getDeveloperStart,
  getDeveloperSuccess,
} from "./developerRedux";
import {
  getTaskFailure,
  getTaskStart,
  getTaskSuccess,
  addTaskFailure,
  addTaskStart,
  addTaskSuccess,
  deleteTaskFailure,
  deleteTaskSuccess,
  deleteTaskStart,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailure,
} from "./taskRedux";
import {
  addChoreFailure,
  addChoreStart,
  addChoreSuccess,
  deleteChoreFailure,
  deleteChoreStart,
  deleteChoreSuccess,
  getChoreFailure,
  getChoreStart,
  getChoreSuccess,
} from "./choreRedux";

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

export const logOut = async (dispatch) => {
  dispatch(logout());
};

//PROJECTS

//get project
export const getProjects = async (dispatch) => {
  dispatch(getProjectStart());
  try {
    const res = await userRequest.get("/projects");
    dispatch(getProjectSuccess(res.data));
  } catch (err) {
    dispatch(getProjectFailure());
  }
};

//delete project
export const deleteProject = async (id, dispatch) => {
  dispatch(deleteProjectStart());
  try {
    const deletProject = await userRequest.delete(`/projects/${id}`);
    // const releventTasks= getTasks(dispatch,deletProject.data._id);
    //console.log(releventTasks);
    dispatch(deleteProjectSuccess(id));
  } catch (err) {
    dispatch(deleteProjectFailure());
  }
};

//update Project
export const updateProject = async (dispatch, project, id) => {
  dispatch(updateProjectStart());
  try {
    const res = await userRequest.put(`/projects/${id}`, project);
    //console.log(res.data);
    dispatch(updateProjectSuccess(res.data));
  } catch (err) {
    dispatch(updateProjectFailure());
  }
};

//add project
export const addProject = async (Project, dispatch) => {
  dispatch(addProjectStart());
  try {
    const res = await userRequest.post(`/projects`, Project);
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

//update developer
export const updatedeveloper = async (dispatch) => {
  dispatch(getDeveloperStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getDeveloperSuccess(res.data));
  } catch (err) {
    dispatch(getDeveloperFailure());
  }
};

//TASKS

//GET TASK BY PROJEC ID
export const getTasks = async (dispatch, id) => {
  dispatch(getTaskStart());
  try {
    const res = await userRequest.get(`/tasks/${id}`);
    dispatch(getTaskSuccess(res.data));
  } catch (err) {
    dispatch(getTaskFailure());
  }
};

//update Task
export const updateTask = async (dispatch, task, id) => {
  dispatch(updateTaskStart());
  try {
    const res = await userRequest.put(`/tasks/${id}`, task);
    //console.log(res.data);
    dispatch(updateTaskSuccess(res.data));
  } catch (err) {
    dispatch(updateTaskFailure());
  }
};


//ADD TASK
export const addTask = async (Task, dispatch) => {
  dispatch(addTaskStart());
  try {
    const res = await userRequest.post(`/tasks`, Task);
    dispatch(addTaskSuccess(res.data));
  } catch (err) {
    dispatch(addTaskFailure());
  }
};
//delete task
export const deleteTask = async (id, dispatch) => {
  dispatch(deleteTaskStart);
  try {
    await userRequest.delete(`/tasks/${id}`);
    dispatch(deleteTaskSuccess(id));
  } catch (err) {
    dispatch(deleteTaskFailure());
  }
};

//delete task by project id
export const deleteTaskByProjectId = async (id, dispatch) => {
  dispatch(deleteTaskStart);
  try {
    await userRequest.delete(`/tasks/find/${id}`);
    dispatch(deleteTaskSuccess(id));
  } catch (err) {
    dispatch(deleteTaskFailure());
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

//ADD chore
export const addChore = async (Chore, dispatch) => {
  dispatch(addChoreStart());
  try {
    const res = await userRequest.post(`/chores`, Chore);
    dispatch(addChoreSuccess(res.data));
  } catch (err) {
    dispatch(addChoreFailure());
  }
};

//delete chore
export const deleteChore = async (id, dispatch) => {
  dispatch(deleteChoreStart());
  try {
    const choreid = await userRequest.delete(`/chores/${id}`);

    dispatch(deleteChoreSuccess(id));
  } catch (err) {
    dispatch(deleteChoreFailure());
  }
};

//delete chore by task id
export const deleteChoreByTaskId = async (id, dispatch) => {
  dispatch(deleteChoreStart());
  try {
    await userRequest.delete(`/chores/find/${id}`);
    dispatch(deleteChoreSuccess(id));
  } catch (err) {
    dispatch(deleteChoreFailure());
  }
};
