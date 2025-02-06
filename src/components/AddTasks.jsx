import { useState } from 'react'

function AddTasks({ onClickCreateTask }) {
    const [text, setText] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow  flex flex-col">
            <input
                type="text"
                className="w-full p-2 rounded-md border-slate-300 outline-slate-400"
                placeholder="Digite o nome da tarefa"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <input
                type="text"
                className="w-full p-2 rounded-md border-slate-300 outline-slate-400"
                placeholder="Descrição da tarefa"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <div className="flex justify-between">
                <button
                    onClick={() => {
                        setText('')
                        setDescription('')
                    }}
                    className="bg-red-400 rounded-md p-2 text-white w-5/12 border-black"
                >
                    Reset
                </button>
                <button
                    onClick={() => {
                        //verifica se o texto está vazio
                        if (!text.trim() || !description.trim()) {
                            setText('')
                            setDescription('')
                            return alert(
                                'Digite o nome e a descrição da tarefa'
                            )
                            
                        }
                        onClickCreateTask(text, description)
                        setText('')
                        setDescription('')
                    }}
                    className="bg-green-600 rounded-md p-2 text-white w-6/12"
                >
                    Adicionar
                </button>
            </div>
        </div>
    )
}
export default AddTasks
