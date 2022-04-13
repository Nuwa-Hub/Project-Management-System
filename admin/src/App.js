
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
import ProjectTask from './pages/projectTask/ProjectTask';

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
     <Route path="/projectTask" element={<ProjectTask />} />
     </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
