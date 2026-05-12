import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
  });

  const registerUser = async () => {
    try {
      await axios.post("https://team-task-manager-production-485e.up.railway.app", form);
      alert("Registered successfully");
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Register</h1>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <br /><br />

      <select
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="member">Member</option>
        <option value="admin">Admin</option>
      </select>

      <br /><br />

      <button onClick={registerUser}>Register</button>

      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;