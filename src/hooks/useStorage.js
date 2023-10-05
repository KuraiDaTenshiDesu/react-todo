import {useEffect} from 'react'

export const useStorage = (callback) => {
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');

    if (!storedTasks) {
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      callback(storedTasks)
    }
  }, [])

}