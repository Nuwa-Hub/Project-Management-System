import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { routes } from "./routes";
import ProtectedRoute from "./components/common/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        {routes.map(({ element, path, name }) => (
          <Route
            key={name}
            path={path}
            element={<ProtectedRoute element={element} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
