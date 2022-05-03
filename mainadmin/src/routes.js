import Home from "./pages/home/Home"
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
        name: 'user',
        element: <User />,
        path: '/user',
      },
      {
        name: 'timeline',
        element: <Timeline />,
        path: '/timeline',
      },

      
]

