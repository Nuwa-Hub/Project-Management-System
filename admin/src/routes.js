import Home from "./pages/home/Home"
import ProjectList from "./pages/projectList/ProjectList"
import ProjectTaskList from "./pages/projectTask/ProjectTaskList"
import Task from "./pages/task/Task"
import User from "./pages/user/User"
import UserList from "./pages/userList/UserList"
import Project from "./pages/project/Project"

export const routes = [
    {
      name: 'home',
      element: <Home />,
      path: '/',
    },
    {
        name: 'projects',
        element: <ProjectList />,
        path: '/projects',
      },
      {
        name: 'users',
        element: <UserList />,
        path: '/users',
      },
      {
        name: 'project',
        element: <Project />,
        path: '/project',
      },
      {
        name: 'tasks',
        element: <ProjectTaskList />,
        path: '/tasks',
      },
      {
        name: 'user',
        element: <User />,
        path: '/user',
      },
      {
        name: 'task',
        element: <Task />,
        path: '/task',
      },

      
]

