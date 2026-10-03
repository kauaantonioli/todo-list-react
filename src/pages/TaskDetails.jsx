import { ChevronLeft } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router"

const TaskDetails = () => {
    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return (
        <div className="bg-gray-600 text-white w-screen h-screen">
            <div className="flex flex-col w-120 mx-auto items-center ">
                <div className="flex justify-center relative w-full mt-5 mb-3">
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-500 rounded-md"
                        onClick={() => navigate(-1)}
                    >
                        <ChevronLeft />
                    </button>
                    <h1 className="font-bold text-3xl text-center">Detalhes da tarefa</h1>
                </div>

                <div className="bg-gray-400 p-3 w-full flex flex-col items-center rounded-md ">
                    <h2 className="text-2xl font-medium ">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div >
    )
}

export default TaskDetails