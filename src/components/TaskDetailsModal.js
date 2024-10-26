import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TaskDetailsModal = ({ task, onClose }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleSave = () => {
    // Implement saving logic here
    onClose();
  };

  return (
    <Modal isOpen={!!task} onRequestClose={onClose} contentLabel="Task Details">
      <h2>Task Details</h2>
      <form>
        <label>
          Task Name:
          <input
            type="text"
            value={editedTask.text}
            onChange={(e) => setEditedTask({ ...editedTask, text: e.target.value })}
          />
        </label>
        <div style={{ marginTop: '0px' }}> {/* Add margin to the container */}
          <button type="button" onClick={handleSave} style={{ marginRight: '2px' }}> {/* Right margin */}
            Save
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskDetailsModal;
