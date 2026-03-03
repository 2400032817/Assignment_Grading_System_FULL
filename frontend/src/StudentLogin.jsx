import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages/Auth.css";

export default function StudentLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const checkStrength = (value) => {
    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (score <= 1) setStrength("weak");
    else if (score === 2) setStrength("medium");
    else setStrength("strong");
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/student-dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Student Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkStrength(e.target.value);
            }}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              cursor: "pointer",
              fontSize: "14px",
              color: "blue"
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <div className="strength-bar">
          <div className={`bar ${strength}`}></div>
        </div>

        <button onClick={handleLogin}>Login</button>

        <p
          onClick={() => navigate("/forgot-password")}
          style={{ cursor: "pointer", color: "blue" }}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
}