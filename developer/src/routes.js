import Home from "./pages/home/Home";
import ProjectList from "./pages/projectList/ProjectList";
import Task from "./pages/task/Task";
import Timeline from "./pages/timeLine/Timeline";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

export const routes = [
  {
    name: "home",
    element: <Home />,
    path: "/",
  },
  {
    name: "projects",
    element: <ProjectList />,
    path: "/projects",
  },
  {
    name: "users",
    element: <UserList />,
    path: "/users",
  },

  {
    name: "user",
    element: <User />,
    path: "/user",
  },
  {
    name: "task",
    element: <Task />,
    path: "/task/:id",
  },
  {
    name: "timeline",
    element: <Timeline />,
    path: "/timeline",
  },
];