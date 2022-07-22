import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {
        tasks.map((task) => {
          return <TaskItem
            key={ task }
            task={ task }
            onDelete={onDelete} />
        })
      }
    </ul>
  );
};

export default TaskList;
