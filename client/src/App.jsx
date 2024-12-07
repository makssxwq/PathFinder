import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Файл стилей

function App() {
  const [students, setStudents] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // Загрузка данных о студентах при загрузке приложения
    axios.get('http://localhost:8000/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  const fetchPerformance = (studentId) => {
    // Загрузка данных об успеваемости для выбранного студента
    axios.get(`http://localhost:8000/api/performance/${studentId}`)
      .then(response => {
        setPerformanceData(response.data);
        setSelectedStudent(studentId);
      })
      .catch(error => {
        console.error("Error fetching performance data:", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Performance Tracker</h1>
      </header>

      <div className="content">
        <div className="student-list">
          <h2>Students</h2>
          {students.length === 0 ? (
            <p>Loading students...</p>
          ) : (
            <ul>
              {students.map(student => (
                <li key={student.id} onClick={() => fetchPerformance(student.id)}>
                  {student.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="performance-data">
          <h2>Performance Data</h2>
          {selectedStudent && performanceData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Grade</th>
                  <th>Predicted Grade</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.subject}</td>
                    <td>{data.grade}</td>
                    <td>{data.predictedGrade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Select a student to view their performance data.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;