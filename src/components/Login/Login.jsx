import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Box, Button, Container, TextField } from "@mui/material";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authUser, setAuthUser } = useContext(AuthContext);
  console.log("authUser", authUser);
  console.log("setAuthUser", setAuthUser);
  const handleLogin = (event) => {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    // Here you can add authentication logic
    setAuthUser(user);
    navigate("/dashboard");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="xs">
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            label="Login"
            required
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            required
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
