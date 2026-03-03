import { useEffect, useState } from "react";
import axios from "axios";

export default function TeacherDashboard() {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    const res = await axios.get("http://localhost:5000/api/assignments");
    setAssignments(res.data);
  };

  const createAssignment = async () => {
    await axios.post("http://localhost:5000/api/assignments", { title });
    setTitle("");
    fetchAssignments();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>👩‍🏫 Teacher Panel</h1>

      <h3>Create Assignment</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Assignment Title"
      />
      <button onClick={createAssignment}>Create</button>

      <h3>All Assignments</h3>
      {assignments.map((a) => (
        <div key={a.id}>
          <p>{a.title}</p>
        </div>
      ))}
    </div>
  );
}