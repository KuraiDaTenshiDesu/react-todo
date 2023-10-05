import {useState} from 'react'

const TaskForm = ({addTask}) => {
  const [name, setName] = useState('');

  const createTask = (e) => {
    e.preventDefault();
    const value = name.trim();
    
    if (value) {
      const newTask = {
        name: value,
        complete: false,
        id: Date.now(),
      }

      addTask(newTask)
    }
    
    setName('');
  }

  return (
    <form className="form" onSubmit={createTask}>
      <input type='text' placeholder='Task name' value={name} onChange={(e) => setName(e.target.value)}/>
      <button type='submit'><span className="material-symbols-outlined">add</span></button>
    </form>
  );
}
 
export default TaskForm;