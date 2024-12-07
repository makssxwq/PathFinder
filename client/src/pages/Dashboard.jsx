import React, { useEffect, useState } from 'react';
import axios from 'axios';
// 
function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://localhost:8000/api/students');
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} - Predicted Score: {student.predicted_score || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;





