const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
    { id: 4, title: 'Task 4' },
  ];

  return (
    <ul>
      {
        tasks.map((task) => {
          return <li key={ task.id }>{ task.title }</li>;
        })
      }
    </ul>
  );
};

export default TaskList;
