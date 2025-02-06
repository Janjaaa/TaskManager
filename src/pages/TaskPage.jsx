import { ChevronLeft } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function TaskPage() {
    const navigate = useNavigate()

    const [searchParams] = useSearchParams()
    const text = searchParams.get('text')
    const description = searchParams.get('description')

    

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-6">
                <div className='flex justify-center relative mb-6'>
                    <button onClick={()=> navigate(-1)} className='text-slate-100 absolute left-0 top-0 bottom-0'>
                        <ChevronLeft />
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center">
                        Detalhes
                    </h1>
                </div>
                <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow  flex flex-col">
                    <h1 className="text-3xl text-black  text-left">{text}</h1>
                    <p className="text-black text-left"> {description} </p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage
