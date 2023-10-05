import './App.css'
import { useState } from 'react';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import { useFilter } from './hooks/useFilter';
import { useStorage } from './hooks/useStorage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredTasks = useFilter(tasks, filter, search);

  const addTask = (task) => {
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
    setTasks([...tasks, task]);
  }

  useStorage(tasks => setTasks(JSON.parse(tasks)))

  return (
    <div className='App'>
      <h1 className='header'>To-Do List</h1>
      <TaskForm addTask={addTask}/>
      <TaskFilter filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>
      <TasksList tasks={filteredTasks} setTasks={setTasks}/>
    </div>
  )
}

export default App