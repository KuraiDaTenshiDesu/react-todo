import Task from "./Task";

const TasksList = ({tasks, setTasks}) => {

  const removeTask = (task) => {
    const newTasks = tasks.filter(t => t.id !== task.id);
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTasks(newTasks);
  }

  const completeTask = (task) => {
    const newTasks = tasks.map(t => t.id === task.id ? {...task, complete: !task.complete} : t);
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTasks(newTasks);
  }

  return (
    <div className="tasks_list">
      {tasks.length === 0 && <h2 className='subheader'>There is no tasks</h2>}
      {tasks.map(task => (
        <Task key={task.id} task={task} completeTask={completeTask} removeTask={removeTask}/>
      ))}
    </div>
  );
}
 
export default TasksList;