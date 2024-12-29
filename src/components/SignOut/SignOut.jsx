import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
//DODAC CZYSZCZENIE LOCAL STORAGE STWORZ USE EFECCTA REMOVE ITEM (user)
const SignOut = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegisterAndLogin = () => {
    const users = JSON.parse(localStorage.getItem("availableUsers")) || [];
    if (!users.includes(username)) {
      users.push(username);
      localStorage.setItem("availableUsers", JSON.stringify(users));
      localStorage.setItem("username", username);
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  const goToLogin = () => {
    navigate("/signIn");
  };

  return (
    <div className="SignOut">
      <h2>Sign Out</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegisterAndLogin();
        }}
      >
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Zarejestruj i zaloguj</button>
      </form>
      <button onClick={goToLogin}>Przejdź do logowania</button>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        <Alert onClose={() => setError(false)} severity="error">
          Użytkownik już istnieje w systemie
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignOut;
