
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProjectList from './pages/projectList/ProjectList';
import UserList from './pages/userList/UserList';
import Project from './project/Project';
import ProjectTaskList from './pages/projectTask/ProjectTaskList';
import User from './pages/user/User';

function App() {
  return (
    <BrowserRouter>
     <Topbar/>
     <div className='container'>
     <Sidebar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/projects" element={<ProjectList />} />
     <Route path="/users" element={<UserList />} />
     <Route path="/project" element={<Project />} />
     <Route path="/tasks" element={<ProjectTaskList />} />
     <Route path="/user" element={<User />} />
     </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
