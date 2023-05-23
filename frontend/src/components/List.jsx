import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import Todo from './Todo.jsx';

import { getAllTodos, addTodo, todos } from '../store/todoStore';

export default function List() {

    const [newTodo, setNewTodo] = useState('');
    const $todos = useStore(todos);

    useEffect(() => {
        // seedTodos();
        getAllTodos();
    }, []);

    const handleSubmit = (e) => {
        addTodo(newTodo);
        setNewTodo('');
        e.preventDefault();
    }

    return (
        <div
        className='flex flex-col text-white gap-4 mt-8'>
            <h1 className='text-4xl'>Inbox</h1>
            <form onSubmit={handleSubmit}>
                <input
                className='bg-slate-800 py-2 px-4 rounded-lg'
                placeholder='Add task to "Inbox"' 
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} />
            </form>

            <ul>
                {$todos.map((todo, index) => 
                    <Todo key={index} index={index} todo={todo}/>
                )}
            </ul>
        </div>
    )
}
