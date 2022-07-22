import { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import TaskList from './TasksList';

const App = () => {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleType = (e) => {
    setTask(e.target.value);
  }

  const handleSave = () => {
    if (!task) {
      return;
    }

    tasksList.push(task);
    setTasksList(tasksList);
    setTask('');
  }

  return (
    <div>
      <header>
        <h1>ToDo App</h1>
      </header>

      <div>
        <NewTaskForm
          task={task}
          onType={handleType}
          onSave={handleSave} />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
