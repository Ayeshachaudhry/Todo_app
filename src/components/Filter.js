import React from 'react';
import './Filter.css'; // Optional styling

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter-container">
      <button onClick={() => onFilterChange('all')}>All</button>
      <button onClick={() => onFilterChange('completed')}>Completed</button>
      <button onClick={() => onFilterChange('pending')}>Pending</button>
    </div>
  );
};

export default Filter;
