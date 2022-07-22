import NewTaskForm from "./NewTaskForm";
import TaskList from "./TasksList";

const App = () => {
  return (
    <div>
      <header>
        <h1>ToDo App</h1>
      </header>

      <div>
        <NewTaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
