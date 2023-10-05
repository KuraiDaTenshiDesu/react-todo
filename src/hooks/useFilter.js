import { useMemo } from "react";

export const useSearch = (tasks, search) => {
  const searchedTasks = useMemo(() => {
    if (search) return [...tasks].filter(task => task.name.toLowerCase().includes(search.toLowerCase()));
    return [...tasks];
  }, [tasks, search]);

  return searchedTasks;
}

export const useFilter = (tasks, filter, search) => {
  const searchedTasks = useSearch(tasks, search);

  const filteredTasks = useMemo(() => {
    if (filter === 'all') return [...searchedTasks];
    if (filter === 'completed') return [...searchedTasks].filter(task => task.complete);
    if (filter === 'uncompleted') return [...searchedTasks].filter(task => !task.complete);
  }, [filter, searchedTasks]);

  return filteredTasks;
}