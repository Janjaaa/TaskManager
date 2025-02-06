import Tasks from './components/tasks'
import AddTasks from './components/AddTasks'
import { useState, useEffect } from 'react'
import { v4 } from 'uuid'


function App() {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    )

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    /* 
    Example of fetching data from an API


    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=10'
        )
        const data = await response.json()
        console.log(data)
      }
      fetchData()
    }, [])
    */

    function onTaskClick(taskId) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task
        })
        setTasks(newTasks)
    }

    function onDeleteTask(taskId) {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasks(newTasks)
    }

    function onClickCreateTask(text, description) {
        const newTask = {
            id: v4(),
            text: text,
            description: description,
            isCompleted: false
        }
        setTasks([...tasks, newTask])
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-6">
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Gerenciador de Tarefas
                </h1>
                <AddTasks onClickCreateTask={onClickCreateTask} />
                <Tasks
                    tasks={tasks}
                    onTaskClick={onTaskClick}
                    onDeleteTask={onDeleteTask}
                />
            </div>
        </div>
    )
}

export default App
