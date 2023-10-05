const Task = ({task, completeTask, removeTask}) => {
  return (
    <div className='task'>
      <h2 className={task.complete ? 'task__complete' : undefined}>{task.name}</h2>
      
      <div className="task_btns">

        <button onClick={() => completeTask(task)}>
          <span className="material-symbols-outlined">done</span>
        </button>

        <button onClick={() => removeTask(task)}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
 
export default Task;