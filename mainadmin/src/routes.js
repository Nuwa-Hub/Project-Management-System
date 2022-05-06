import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Project from "./pages/project/Project"
import ProjectList from "./pages/projectList/ProjectList"
import Timeline from "./pages/timeLine/Timeline"
import User from "./pages/user/User"
import UserList from "./pages/userList/UserList"


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
        path: '/project/:id',
      },
      {
        name: 'profile',
        element: <Profile />,
        path: '/profile/:id',
      },
      {
        name: 'user',
        element: <User />,
        path: '/user/:id',
      },
      {
        name: 'timeline',
        element: <Timeline />,
        path: '/timeline',
      },

      
]

