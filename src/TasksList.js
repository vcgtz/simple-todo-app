const TaskList = () => {
  const tasks = [
    { title: 'Task 1' },
    { title: 'Task 2' },
    { title: 'Task 3' },
    { title: 'Task 4' },
  ];

  return (
    <ul>
      {
        tasks.map((task) => {
          return <li key={ task.title }>{ task.title }</li>;
        })
      }
    </ul>
  );
};

export default TaskList;
