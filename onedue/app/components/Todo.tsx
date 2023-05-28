'use client'

import { useState, MouseEvent } from "react";
import { Icon } from '@iconify/react';

interface Todo {
    id: string;
    list_id?: string;
    user_id: string;
    name: string;
    description?: string;
    due_date?: Date;
    completed?: boolean;
}

export default function Todo(todo: Todo) {
    const [completed, setCompleted] = useState(todo.completed);

    const handleComplete = async (e: MouseEvent) => {
        const url = `http://localhost:3000/api/todos/${todo.id}`
        const res = await fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PATCH',
            body: JSON.stringify(!completed),
        });
        const data: Todo = await res.json();

        setCompleted(data.completed);

        e.preventDefault();
        return data;
    }

    const handleDelete = async (e: MouseEvent) => {

        const url = `http://localhost:3000/api/todos/${todo.id}`
        const res = await fetch(url, {
            method: 'DELETE',
        });
        const data: Todo = await res.json();

        e.preventDefault();
        return data;
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
                <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleComplete(e)}>
                    { todo.completed ?
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
            <button onClick={(e: MouseEvent) => handleDelete(e)}>
                <Icon 
                icon='carbon:close'
                className='text-blue-400'
                />
            </button>
        </li>
    )
}