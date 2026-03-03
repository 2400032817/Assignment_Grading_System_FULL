import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages/Auth.css";   // ✅ FIXED (capital A)

function TeacherLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (pwd) => {
    const strongPassword =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return strongPassword.test(pwd);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError(
        "Password must be 8+ chars, include uppercase, lowercase, number & special character"
      );
      return;
    }

    navigate("/teacher-dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>👩‍🏫 Teacher Login</h2>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Teacher Email" required />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Login</button>
        </form>

        <p
          style={{ marginTop: "10px", cursor: "pointer", color: "white" }}
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default TeacherLogin;