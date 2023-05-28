'use client'

import { useQuery } from '@tanstack/react-query'

import Todo from './Todo'

interface Todo {
    id: string;
    list_id?: string;
    user_id: string;
    name: string;
    description?: string;
    due_date?: Date;
    completed?: boolean;
}

interface List {
    id?: string;
    user_id: string;
    list_name: string;
    todos?: Todo[];
}

const getList = async (id: string) => {
  const url = `http://localhost:3000/api/lists/${id}`
	const res = await fetch(url);
	const list: List = await res.json();

	return list;
}

export default function TodoList(id: string) {
    const { data, isLoading } = useQuery<List>({
        queryKey: ['list'],
        queryFn: () => getList(id)
    });
    
    return (
        <ul>
        {
          data === undefined || data.todos === undefined ?
          <p>Loading</p> :
          data.todos.map((todo: Todo) => <Todo {...todo}/> )}
        </ul>
    )
}