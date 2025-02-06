import { ChevronRightIcon,  Trash } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks({tasks, onTaskClick, onDeleteTask}) {
    const navigate = useNavigate()

    function showDetailsClick( text, description) {
        const query = new URLSearchParams()
        query.set('text', text)
        query.set('description', description)
        navigate(`/details?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
            {tasks.map(task => (
                <li
                    key={task.id}
                    className="flex gap-2"
                >
                    <button onClick={() => onTaskClick(task.id)} className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${task.isCompleted && 'line-through'}`}> {task.text}</button>
                    <button onClick={()=>{showDetailsClick(task.text, task.description)}} className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDeleteTask(task.id)}  className="bg-red-400 text-white p-2 rounded-md">
                        <Trash />
                    </button>
                </li>
            ))}
        </ul>
    )
}
export default Tasks
