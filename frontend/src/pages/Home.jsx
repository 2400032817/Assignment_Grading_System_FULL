import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* LEFT SIDE */}
      <div className="home-left">
        <h1>Showcase Your Academic Journey</h1>
        <p>
          A comprehensive platform for students to upload assignments,
          track progress and receive feedback from teachers.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="home-right">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p>Choose your role to continue</p>

          <button
            className="btn student-btn"
            onClick={() => navigate("/student-login")}
          >
            Login as Student
          </button>

          <button
            className="btn teacher-btn"
            onClick={() => navigate("/teacher-login")}
          >
            Login as Teacher
          </button>
        </div>
      </div>
    </div>
  );
}