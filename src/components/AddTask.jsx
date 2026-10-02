import { useState } from "react"

const AddTask = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    return (
        <div className="flex flex-col gap-2 w-120 bg-gray-400 p-4 rounded-md">
            <input
                className="bg-white border border-slate-400 outline-slate-500 font-medium p-2 w-full rounded-md"
                type="text"
                placeholder="Título da tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="bg-white border border-slate-400 outline-slate-500 font-medium p-2 w-full rounded-md"
                type="text"
                placeholder="Descrição da tarefa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button
                onClick={() => {
                    if (!title.trim() || !description.trim()) return alert("Preencha o título e a descrição da tarefa")

                    props.addTask(title, description)

                    setTitle("")
                    setDescription("")
                }}
                className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white font-medium p-2 rounded-md">Adicionar
            </button>
        </div>
    )
}

export default AddTask