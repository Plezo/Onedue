import { useState } from 'react';
import { useStore } from '@nanostores/react';
import Todo from './Todo.jsx';

import { currentList, currentTodos, addTodo } from '../store/todoStore';

export default function List() {

    const [newTodoName, setNewTodoName] = useState('');

    const $currentList = useStore(currentList);
    const $currentTodos = useStore(currentTodos);

    const handleAddTodo = (e) => {
        const todo = {
            list_id: $currentList.list_id,
            user_id: 'e3402a58-496e-4b5d-82a3-7481c0790dca',
            name: newTodoName,
        }

        addTodo(todo);

        setNewTodoName('');
        e.preventDefault();
    }

    return (
        <div
        className='flex flex-col text-white gap-4 mt-8'>
            <h1 className='text-4xl'>{$currentList.list_name}</h1>
            <form onSubmit={handleAddTodo}>
                <input
                className='bg-slate-800 py-2 px-4 rounded-lg'
                placeholder='Add task to "Inbox"' 
                type="text"
                value={newTodoName}
                onChange={(e) => setNewTodoName(e.target.value)} />
            </form>

            <ul>
                {$currentTodos.map((todo) =>
                    <Todo key={todo.todo_id} todo={todo}/>
                )}
            </ul>
        </div>
    )
}
