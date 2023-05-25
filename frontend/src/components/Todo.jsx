import { useState } from 'react';
import { removeTodo, flipCompleteTodo } from '../store/todoStore';
import { Icon } from '@iconify/react';

export default function Todo({ todo }) {
    const [completed, setCompleted] = useState(todo.completed);

    const handleComplete = async (e) => {
        todo = await flipCompleteTodo(todo);
        setCompleted(todo.completed);

        e.preventDefault();
    }

    const handleDelete = async (e) => {
        await removeTodo(todo);

        e.preventDefault();
    }

    return (
        <li
        className='
        flex justify-between gap-2 py-2 pr-2 pl-4 
        border-b-[1px] border-l-2 border-solid 
        border-l-white border-b-gray-700
        hover:bg-slate-500 active:bg-slate-400
        '>
            <div className='flex items-center gap-2'>
                <button onClick={handleComplete}>
                    { completed ?
                        <Icon 
                        icon='carbon:checkbox-checked'
                        className='text-blue-400'
                        /> :
                        <Icon 
                        icon="carbon:checkbox"
                        className="text-blue-400"
                        />
                    }
                </button>
                <p>{todo.name}</p>
            </div>
            <button onClick={handleDelete}>
                <Icon 
                icon='carbon:close'
                className='text-blue-400'
                />
            </button>
        </li>
    )
}
