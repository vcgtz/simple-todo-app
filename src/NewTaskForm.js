import { useState } from 'react';

const NewTaskForm = ({ task, onType, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    onType(e);
  }

  const handleClick = () => {
    onSave();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange} />
      
      <button onClick={handleClick}>Add</button>
    </form>
  )
};

export default NewTaskForm;
