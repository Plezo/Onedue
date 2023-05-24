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

interface List {
    list_id: string;
    user_id: string;
    list_name: string;
	todos: Todo[];
}

export const lists = atom<List[]>([]);

// default list should be inbox (all unallocated todos)
export const currentList = atom<List>({
    list_id: "",
    user_id: "",
    list_name: "",
    todos: []
});

export const currentTodos = atom<Todo[]>(currentList.get().todos);

export function updateCurrent(list: List) {
    currentList.set(list);
    currentTodos.set(list.todos);
}

export function addToList(todo: Todo) {

    const newList = currentList.get();
    newList.todos = [...newList.todos, todo];
    currentList.set(newList);
    currentTodos.set(newList.todos);
}

/*
*  API CALLS
*/
export async function getAllLists(): Promise<List[]> {
    const url = 'http://localhost:5001/api/lists';

    try {
        const res: AxiosResponse<List[]> = await axios.get(url);
        lists.set(res.data);
        currentList.set(res.data[0]);
        currentTodos.set(res.data[0].todos);
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
        lists.set([...lists.get(), res.data]);
        console.log(lists.get());
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
        return res.data;
    } catch (err) {
        console.error('Error:', err.message);
        throw err;
    }
}
