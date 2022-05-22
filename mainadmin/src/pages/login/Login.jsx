import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  console.log("dsffsf")
  //if (user != null) navigate("/");
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Login
      </button>
      {error && <span>Something went wrong...</span>}
      <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
      <a>CREATE A NEW ACCOUNT</a>
    </div>
  );
};

export default Login;
