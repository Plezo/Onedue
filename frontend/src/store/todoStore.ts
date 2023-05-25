import { atom, onMount, task } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent'
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

interface NewTodo {
    list_id?: string;
    user_id: string;
    name: string;
    description?: string;
    due_date?: Date;
	completed?: boolean;
}

interface List {
    list_id: string;
    user_id: string;
    list_name: string;
    todos: Todo[];
}

export const lists = persistentAtom<List[]>('lists', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export const currentList = persistentAtom<List>('currentList', {
    list_id: "",
    user_id: "",
    list_name: "",
    todos: []
}, { encode: JSON.stringify, decode: JSON.parse });

export const currentTodos = persistentAtom<Todo[]>('currentTodos', [], 
    { encode: JSON.stringify, decode:JSON.parse });

onMount(lists, () => {
    task(async () => {
        lists.set(await getAllLists());
        console.log(lists.get())
    })
});

onMount(currentList, () => {
    task(async () => {

        // Figure out how to get first thing in lists arr
        currentList.set({
            list_id: "",
            user_id: "",
            list_name: "",
            todos: []
        });

        console.log(currentList.get())
    })
})

onMount(currentTodos, () => {
    task(async () => {
        currentTodos.set([]);
        console.log(currentTodos.get())
    })
})

/* 
 *  HELPER FUNCTIONS
 */
export function updateCurrent(list: List) {
    console.log(list);
    currentList.set(list);
    currentTodos.set(list.todos);
}

// updates frontend to match new values
export function updateClient(list: List) {

    currentList.set(list);
    currentTodos.set(list.todos);

    lists.set(lists.get().map((i) => {
        if (i.list_id === list.list_id)
            return list;
        return i;
    }))
}

/* 
 *  API CALLS FOR LISTS
 */
export async function getAllLists(): Promise<List[]> {
    const url = 'http://localhost:5001/api/lists';

    try {
        const res: AxiosResponse<List[]> = await axios.get(url);

        if (currentList.get().list_id === "" && res.data.length > 0) {
            currentList.set(res.data[0]);
            currentTodos.set(res.data[0].todos);
        }

        lists.set(res.data);

        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}

export async function addList(listName: string): Promise<List> {
    const url = 'http://localhost:5001/api/lists';

    let list: Object = {
        user_id: 'e3402a58-496e-4b5d-82a3-7481c0790dca',
        list_name: listName
    }

    try {
        const res: AxiosResponse<List> = await axios.post(url, list);

        let newList: List = res.data;
        newList.todos = [];

        lists.set([...lists.get(), newList]);

        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}

export async function removeList(list: List): Promise<List> {
    const url = `http://localhost:5001/api/lists/${list.list_id}`;

    try {
        const res: AxiosResponse<List> = await axios.delete(url);

        lists.set(lists.get().filter((i) => i.list_id !== list.list_id));

        // TODO: Edge case is if the list we're deleting is === currentList
        // in that case we will simply move back to the "Inbox" list

        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}

/* 
 *  API CALLS FOR TODOS
 */
export async function getAllTodos(): Promise<Todo[]> {
    const url = `http://localhost:5001/api/todos/${currentList.get().list_id}`;

    try {
        const res: AxiosResponse<Todo[]> = await axios.get(url);

        currentList.get().todos = res.data;
        updateClient(currentList.get());

        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}

export async function addTodo(todo: NewTodo): Promise<Todo> {
    const url = 'http://localhost:5001/api/todos';

    try {
        const res: AxiosResponse<Todo> = await axios.post(url, todo);

        currentList.get().todos = [...currentList.get().todos, res.data];
        updateClient(currentList.get());

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

        currentList.get().todos = currentTodos.get().filter((i) => i.todo_id !== todo.todo_id);
        console.log(currentList.get());
        updateClient(currentList.get());

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

        currentList.get().todos.map(i => {
            if (i.todo_id === todo.todo_id) {
                todo.completed = !todo.completed;
                return todo;
            }
            return i;
        })
        updateClient(currentList.get());

        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}