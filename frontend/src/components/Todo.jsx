import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { todos } from '../store/todoStore';
import { Icon } from '@iconify/react';

export default function Todo({ index, todo }) {
    const $todos = useStore(todos);
    const [completed, setCompleted] = useState(todo.completed);

    const handleComplete = (e) => {
        $todos.at(index).completed = !$todos.at(index).completed;
        setCompleted($todos.at(index).completed)
        console.log($todos)
    }

    return (
        <li
        className='
        flex items-center gap-2 py-2 pr-2 pl-4 
        border-b-[1px] border-l-2 border-solid 
        border-l-white border-b-gray-700
        hover:bg-slate-500 active:bg-slate-400
        '>
            { completed ?
                <button onClick={handleComplete}>
                    <Icon 
                    icon='carbon:checkbox-checked'
                    className='text-blue-400'
                    />
                </button>
                    : 
                    <button onClick={handleComplete}>
                    <Icon 
                    icon="carbon:checkbox"
                    className="text-blue-400"
                    />
                    </button>
                    }
            <p>{todo.name}</p>
        </li>
    )
}
