const TaskFilter = ({filter, setFilter, search, setSearch}) => {
  return (
    <div className='search-filter'>
      <h2 className='subheader'>Search and filter tasks</h2>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder='Search tasks' value={search} onChange={e => setSearch(e.target.value)}/>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
}
 
export default TaskFilter;