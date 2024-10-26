import React, { useState, lazy, Suspense, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import TaskDetailsModal from './components/TaskDetailsModal';
import Dashboard from './components/Dashboard';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Inside your App component return
<ToastContainer />

const setReminder = (dueDate, task) => {
  const reminderTime = new Date(dueDate).getTime() - Date.now();
  if (reminderTime > 0) {
    setTimeout(() => {
      toast(`Reminder: ${task.text} is due!`);
    }, reminderTime);
  }
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    const newTasks = [...tasks, { ...task, id: Date.now(), completed: false }];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setReminder(task.dueDate, task);
  };
  

  const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: true } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <h1>To-Do List App</h1>
      <Dashboard tasks={tasks} />
      <AddTask onAdd={addTask} />
      <Filter onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} onComplete={completeTask} onDelete={deleteTask} onTaskClick={handleTaskClick} />
      {selectedTask && (
        <TaskDetailsModal task={selectedTask} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
