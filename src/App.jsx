import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState([])

  function toogleTask(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })
    setTasks(newTasks)
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  function addTask(title, description) {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="flex flex-col items-center h-screen w-screen gap-5 bg-gray-600">
      <h1 className="mt-5 text-3xl font-bold text-white ">Lista de tarefas</h1>

      <AddTask addTask={addTask} />

      <Tasks tasks={tasks} toogleTask={toogleTask} deleteTask={deleteTask} />
    </div>
  )
}

export default App