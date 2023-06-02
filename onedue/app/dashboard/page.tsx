'use client'

import { useEffect, useState } from "react"
import { Icon } from '@iconify/react'
import { Todo, List } from '../../types'

export default function Dashboard() {

    const [lists, setLists] = useState<List[]>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [error, setError] = useState(null)

    const [currentList, setCurrentList] = useState<List>({
        id: '',
        user_id: '',
        name: '',
        todos: []
    })

    const [newListName, setNewListName] = useState<string>('newList')
    const [newTodoName, setNewTodoName] = useState<string>('')

    const fetchLists = async () => {
        const res = await fetch('/api/lists')
        const data: List[] = await res.json()
        return data
    }

    // not sure how to optimistically update
    const addList = async (e: any) => {
        e.preventDefault()

        const prevState: List[] = lists

        try {
            const newList = {
                user_id: 'cli71sdou0000356indwgdctv',
                name: newListName,
                todos: []
            }

            setNewListName('')
    
            const res = await fetch('/api/lists', {
                method:'POST',
                body: JSON.stringify(newList),
            })

            if (res.status === 500)
                throw await res.json()
    
            const list: List = await res.json()
            setLists(lists => [...lists, list])

        } catch (err) {
            setLists(prevState)
        }
    }

    const selectList = async (list: List) => {
        const res = await fetch(`/api/lists/${list.id}`)
        let selectedList: List = await res.json()
        
        if (!selectedList.todos)
            selectedList.todos = []

        setCurrentList(selectedList);
    }

    const deleteList = async (selectedList: List) => {

        const prevState: List[] = lists

        try {
            if (selectedList.id === currentList.id) {
                setCurrentList({
                    id: '',
                    user_id: '',
                    name: '',
                    todos: []
                })
            }

            setLists(lists.filter((list) => list.id !== selectedList.id))

            const res = await fetch(`/api/lists/${selectedList.id}`, {
                method: 'DELETE',
            })

            if (res.status === 500)
                throw await res.json()

        } catch (err) {
            setLists(prevState)
        }
    }

    // not sure how to optimistically do this
    const addTodo = async (e: any) => {
        e.preventDefault();

        const prevState: List = currentList

        try {
            const newTodo = {
                // id: '',
                user_id: 'cli71sdou0000356indwgdctv',
                list_id: currentList.id,
                name: newTodoName
            }

            setNewTodoName('')

            // optimistically update
            // setCurrentList(currentList => ({
            //     ...currentList,
            //     todos: [...currentList.todos, newTodo]
            // }))
            
            // send post request
            const res = await fetch('/api/todos', {
                method: 'POST',
                body: JSON.stringify(newTodo),
            })

            // revert state if failed
            if (res.status === 500)
                throw await res.json()

            const todo: Todo = await res.json()

            setCurrentList(currentList => ({
                ...currentList,
                todos: [...currentList.todos, todo]
            }))

            // assign an id to the new todo
            // TODO: consider generating UUID on client side
            // setCurrentList(currentList => ({
            //     ...currentList,
            //     todos: currentList.todos.map((i) => {
            //         if (i.id === '')
            //             return todo
            //         return i
            //     })
            // }))

            // update remaining data to match changes
            setLists(lists.map((list) => {
                if (list.id === currentList.id)
                    return currentList
                return list
            }))

        } catch (err) {
            setCurrentList(prevState)
        }
    }

    const completeTodo = async (todo: Todo) => {

        const prevState: List = currentList

        try {
            // optimistic update
            todo.completed = !todo.completed
            setCurrentList(currentList => ({
                ...currentList,
                todos: currentList.todos.map((i) => {
                    if (i.id === todo.id)
                        return todo
                    return i
                })
            }))

            // send patch request
            const res = await fetch(`/api/todos/${todo.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ completed: todo.completed })
            })

            // revert state if failed
            if (res.status === 500)
                throw await res.json()
    
            // update remaining data to match changes
            setLists(lists.map((list) => {
                if (list.id === currentList.id)
                    return currentList
                return list
            }))
            
        } catch (err) {
            setCurrentList(prevState)
        }
    }

    const deleteTodo = async (todo: Todo) => {

        const prevState: List = currentList

        try {
            // optimistically update
            setCurrentList(currentList => ({
                ...currentList,
                todos: currentList.todos.filter((i) => i.id !== todo.id)
            }))

            // send delete request
            const res = await fetch(`/api/todos/${todo.id}`, {
                method: 'DELETE'
            })

            // revert state if failed
            if (res.status === 500)
                throw await res.json()

            // update remaining data to match changes
            setLists(lists.map((list) => {
                if (list.id === currentList.id)
                    return currentList
                return list
            }))

        } catch (err) {
            setCurrentList(prevState)
        }
    }

    useEffect(() => {
        fetchLists()
        .then((data) => {
            setLists(data)
            setLoading(false)
        })
        .catch((err) => {
            setError(err)
            setLoading(false)
        })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <main
        className='
        flex gap-8 w-full justify-evenly
        '>
            <div
            className='
            w-2/12
            '>
                <div className='
                flex justify-between
                '>
                    <h1>Lists</h1>
                    <button>
                        <Icon 
                        className='
                        w-6 h-6
                        ' 
                        icon="carbon:add"
                        />
                    </button>
                </div>
                <form onSubmit={(e: any) => addList(e)}>
                    <input 
                    className='w-full text-black text-sm px-2 py-1'
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    > 
                    </input>
                </form>
                <ul
                className='
                flex flex-col
                mt-6 gap-4
                '>
                    {lists.map((list: List) => 
                        <li 
                        key={list.id}
                        className='
                        hover:bg-zinc-500
                        active:bg-zinc-600
                        '
                        >
                            <button
                            className='
                            w-full flex justify-between items-center
                            '
                            onClick={() => selectList(list)}
                            >
                                <p>{list.name}</p>
                                <Icon 
                                className='
                                h-4 w-4
                                text-zinc-50
                                hover:text-zinc-400
                                active:text-zinc-500
                                ' 
                                icon="carbon:close"
                                onClick={() => deleteList(list)}
                                />
                            </button>
                        </li>
                    )}
                </ul>
            </div> 

            {
                currentList.id === '' ?
                <p>No list selected</p> :
                <div
                className='
                w-2/12
                '>
                    <div 
                    className='
                    flex justify-between
                    '>
                        <h1>{currentList.name}</h1>
                        <button>
                            <Icon 
                            className='
                            w-6 h-6
                            ' 
                            icon="carbon:add"
                            />
                        </button>
                    </div>
                    <form onSubmit={(e: any) => addTodo(e)}>
                        <input 
                        className='w-full text-black text-sm px-2 py-1'
                        value={newTodoName}
                        onChange={(e) => setNewTodoName(e.target.value)}
                        > 
                        </input>
                    </form>
                    <ul
                    className='
                    flex flex-col
                    mt-6 gap-4
                    '>
                        {currentList.todos.map((todo: Todo) => 
                        <li 
                        key={todo.id}
                        className='
                        flex justify-evenly items-center
                        hover:bg-zinc-500
                        active:bg-zinc-600
                        '>
                            <button>
                                { todo.completed ?
                                    <Icon 
                                    icon='carbon:checkbox-checked'
                                    className='text-blue-400'
                                    onClick={() => completeTodo(todo)}
                                    /> :
                                    <Icon 
                                    icon="carbon:checkbox"
                                    className="text-blue-400"
                                    onClick={() => completeTodo(todo)}
                                    />
                                }
                            </button>
                            <p>{todo.name}</p>
                            <Icon 
                            className='
                            h-4 w-4
                            text-zinc-50
                            hover:text-zinc-400
                            active:text-zinc-500
                            ' 
                            icon="carbon:close"
                            onClick={() => deleteTodo(todo)}
                            />
                        </li>
                        )}
                    </ul>
                </div>
            }
        </main>
    )
}