import React from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat-card total-tasks">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>
        <div className="stat-card completed-tasks">
          <h3>Completed Tasks</h3>
          <p>{completedTasks}</p>
        </div>
        <div className="stat-card pending-tasks">
          <h3>Pending Tasks</h3>
          <p>{totalTasks - completedTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
