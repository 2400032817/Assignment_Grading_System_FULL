import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [assignments, setAssignments] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [title, setTitle] = useState("");
  const [studentName, setStudentName] = useState("");
  const [content, setContent] = useState("");
  const [grade, setGrade] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchAssignments();
    fetchSubmissions();
  }, []);

  const fetchAssignments = async () => {
    const res = await axios.get("http://localhost:5000/api/assignments");
    setAssignments(res.data);
  };

  const fetchSubmissions = async () => {
    const res = await axios.get("http://localhost:5000/api/submissions");
    setSubmissions(res.data);
  };

  const createAssignment = async () => {
    if (!title) return alert("Enter title");

    await axios.post("http://localhost:5000/api/assignments", { title });
    setTitle("");
    fetchAssignments();
  };

  const submitAssignment = async (assignmentId) => {
    if (!studentName || !content)
      return alert("Enter name and content");

    await axios.post("http://localhost:5000/api/submissions", {
      assignmentId,
      studentName,
      content,
    });

    setStudentName("");
    setContent("");
    fetchSubmissions();
  };

  const gradeSubmission = async (id) => {
    await axios.put(`http://localhost:5000/api/submissions/${id}`, {
      grade,
      feedback,
    });

    setGrade("");
    setFeedback("");
    fetchSubmissions();
  };

  return (
    <div className="dashboard-container">

      {/* TEACHER SECTION */}
      <div className="teacher-section">
        <h2>👩‍🏫 Teacher Panel</h2>

        <div className="card">
          <h3>Create Assignment</h3>
          <input
            placeholder="Assignment Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={createAssignment}>Create</button>
        </div>

        <div className="card">
          <h3>All Submissions</h3>
          {submissions.map((s) => (
            <div key={s.id} className="submission-card">
              <p><b>Student:</b> {s.studentName}</p>
              <p><b>Content:</b> {s.content}</p>
              <p><b>Grade:</b> {s.grade || "Not graded"}</p>
              <p><b>Feedback:</b> {s.feedback || "No feedback"}</p>

              <input
                placeholder="Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
              <input
                placeholder="Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button onClick={() => gradeSubmission(s.id)}>
                Submit Grade
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* STUDENT SECTION */}
      <div className="student-section">
        <h2>👩‍🎓 Student Panel</h2>

        {assignments.map((a) => (
          <div key={a.id} className="card">
            <h4>{a.title}</h4>

            <input
              placeholder="Your Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <input
              placeholder="Submission Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={() => submitAssignment(a.id)}>
              Submit Assignment
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}