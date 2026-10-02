import { ChevronRight, Trash } from "lucide-react"

const Tasks = (props) => {
    return (
        <ul className="bg-gray-400 p-4 w-120 space-y-4 rounded-md">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => props.toogleTask(task.id)} className={`bg-white cursor-pointer p-2 text-left w-full rounded-md font-medium ${task.isCompleted && "line-through text-gray-600"}`}>
                        {task.title}
                    </button>
                    <button className="bg-white hover:bg-gray-300 p-2 rounded-md cursor-pointer w-12 flex items-center justify-center">
                        <ChevronRight className="size-5" />
                    </button>
                    <button onClick={() => props.deleteTask(task.id)} className="bg-white hover:bg-gray-300 p-2 rounded-md cursor-pointer w-12 flex items-center justify-center">
                        <Trash className="size-5" />
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks