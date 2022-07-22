const TaskList = ({ tasks }) => {
  return (
    <ul>
      {
        tasks.map((task) => {
          return <li key={ task }>{ task }</li>;
        })
      }
    </ul>
  );
};

export default TaskList;
