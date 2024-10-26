import React from 'react';
import { motion } from 'framer-motion';

const Task = ({ task, onComplete, onDelete, onTaskClick }) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => onTaskClick(task)}
    >
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <p>{task.text}</p>
        {task.dueDate && <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>}
        <div className="actions">
          <button onClick={() => onComplete(task.id)}>Complete</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      </div>
    </motion.li>
  );
};

export default Task;
