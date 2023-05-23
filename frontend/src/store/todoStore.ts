import { atom } from 'nanostores';
import axios, { AxiosResponse } from 'axios';

interface Todo {
    todo_id: string;
    list_id?: string;
    user_id: string;
    name: string;
    description?: string;
    due_date?: Date;
	completed?: boolean;
}

export const todos = atom<Todo[]>([]);

export async function getAllTodos(): Promise<Todo[]> {
    const url = 'http://localhost:5001/api/todos';

    try {
        const res: AxiosResponse<Todo[]> = await axios.get(url);
        todos.set(res.data);
        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}

export async function addTodo(todoName: string, todoDesc: string = ''): Promise<Todo> {
    const url = 'http://localhost:5001/api/todos';

    let todo: Object = {
        list_id: '0214a07f-c99f-4d72-a178-97419fc593e1',
        user_id: 'e3402a58-496e-4b5d-82a3-7481c0790dca',
        name: todoName,
        description: todoDesc,
        completed: false
    }

    try {
        const res: AxiosResponse<Todo> = await axios.post(url, todo);
        todos.set([...todos.get(), res.data]);
        console.log(todos.get());
        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}

export async function flipCompleteTodo(todo: Todo): Promise<Todo> {
    const url = `http://localhost:5001/api/todos/${todo.todo_id}`;

    try {
        const res: AxiosResponse<Todo> = await axios.patch(url, { completed: !todo.completed });

        todos.get().map(i => {
            if (i.todo_id === todo.todo_id) {
                i.completed = !i.completed;
                return {...todos, i};
            }
            return todo;
        })

        console.log(todos);
        
        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}

export async function removeTodo(todo: Todo): Promise<Todo> {
    const url = `http://localhost:5001/api/todos/${todo.todo_id}`;

    try {
        const res: AxiosResponse<Todo> = await axios.delete(url)
        todos.set(todos.get().filter((i) => i.todo_id !== todo.todo_id));
        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}