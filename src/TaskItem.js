import { useState } from 'react';

const TastItem = ({ task, onDelete }) => {
  const [markAsComplete, setMarkAsComplete] = useState(false);

  const handleComplete = () => {
    setMarkAsComplete(!markAsComplete);
  };

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <li className={`${ markAsComplete ? 'complete' : ''}`}
      >
      { task }
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
};

export default TastItem;
