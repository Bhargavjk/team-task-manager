import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setProjects(res.data);
    } catch (err) {
      alert("Failed to fetch projects");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;