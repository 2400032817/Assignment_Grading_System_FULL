import { useEffect, useState } from "react";
import axios from "axios";

export default function StudentDashboard() {
  const [assignments, setAssignments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    const res = await axios.get("http://localhost:5000/api/assignments");
    setAssignments(res.data);
  };

  const submitAssignment = () => {
    alert("Submitted successfully (demo mode)");
    setName("");
    setContent("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>👩‍🎓 Student Panel</h1>

      <h3>Submit Assignment</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Submission Content"
      />
      <button onClick={submitAssignment}>Submit</button>

      <h3>Available Assignments</h3>
      {assignments.map((a) => (
        <div key={a.id}>
          <p>{a.title}</p>
        </div>
      ))}
    </div>
  );
}