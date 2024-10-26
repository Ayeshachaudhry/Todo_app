import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onComplete, onDelete, onTaskClick }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
          onTaskClick={onTaskClick}
        />
      ))}
    </ul>
  );
};

export default TaskList;
