import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  });

  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Registered successfully");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />

      <select onChange={e => setForm({...form, role: e.target.value})}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      <button onClick={register}>Register</button>
    </div>
  );
}