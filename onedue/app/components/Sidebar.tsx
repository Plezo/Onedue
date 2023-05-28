'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import Link from 'next/link';

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
    name: string;
    todos?: Todo[];
}

export default function Sidebar() {

    const [newList, setNewList] = useState('testing123')

    const {data, isLoading} = useQuery<List[]>({
        queryKey: ['lists'], 
        queryFn: () => fetch('http://localhost:3000/api/lists').then(res => res.json())
    })

    const queryClient = useQueryClient()

    const addList = async (addedList: string) => {

        const newList = {
            user_id: 'cli71sdou0000356indwgdctv',
            list_name: addedList
        }

        const data = await fetch('http://localhost:3000/api/lists', {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(newList),
        })
        const list = await data.json();
        return list;
    }

    const deleteList = async (deletedList: List) => {
        const data = await fetch(`http://localhost:3000/api/lists/${deletedList.id}`, {
            method: "DELETE",
        })
        const list = await data.json();
        console.log(list);
    }

    const addMutation = useMutation({
        mutationFn: addList,
        onMutate: async (addedList) => {
            await queryClient.cancelQueries({queryKey: ['lists']})
            const previousLists: List[] = queryClient.getQueryData(['lists'])!;
            queryClient.setQueryData(
                ['lists'],
                (old: any) => [...old, addedList]
            )
            return { previousLists }
        },
        onError: (err, list, context) => {
            queryClient.setQueryData(['lists'], context?.previousLists)
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['lists']}) // does a refetch
        },
        // onSuccess(data, variables, context) {
        //     console.log(data);
        // }
    })

    const deleteMutation = useMutation({
        mutationFn: deleteList,
        onMutate: async (deletedList: List) => {
            await queryClient.cancelQueries({queryKey: ['lists']})
            // get a snapshot of all list data
            const previousLists: List[] = queryClient.getQueryData(['lists'])!;
            // optimistically update the data
            queryClient.setQueryData(
                ['lists'],
                previousLists.filter((list: List) => list.id !== deletedList.id)
            )
            return { previousLists }
        },
        onError: (err, list, context) => {
            queryClient.setQueryData(['lists'], context?.previousLists)
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['lists']}) // does a refetch
        },
        onSuccess(data, variables, context) {
            console.log(data);
        }
    })

    return (
        <div>
            <ul>
                <li className='
                flex items-center gap-2
                text-white mt-3 
                mx-4 p-2 rounded-2xl
                hover:bg-zinc-600
                active:bg-zinc-700
                '>
                    <p>Inbox</p>
                </li>
                <li className='
                flex items-center gap-2
                text-white mt-3 
                mx-4 p-2 rounded-2xl
                hover:bg-zinc-600
                active:bg-zinc-700
                '>
                    <p>Today</p>
                </li>
                <li className='
                flex items-center gap-2
                text-white mt-3 
                mx-4 p-2 rounded-2xl
                hover:bg-zinc-600
                active:bg-zinc-700
                '>
                    <p>Upcoming</p>
                </li>
            </ul>

            <div>
                <div className='
                flex justify-between mx-4 mt-8 text-lg
                '>
                    <h1 className='text-white opacity-75'>Lists</h1>
                    <button>
                        <Icon 
                        className='
                        h-6 w-6
                        text-zinc-50
                        hover:text-zinc-200
                        active:text-zinc-300
                        ' 
                        icon="carbon:add"
                        onClick={() => addMutation.mutate(newList)}/>
                    </button>
                </div>
                <ul className='flex flex-col gap-4 mt-4'>
                    {
                        data === undefined ?
                        <p>LOADING</p> :
                        data.map((list: List) => {
                            return <li 
                            key={list.id}
                            className='
                            flex items-center
                            text-white
                            rounded-2xl
                            hover:bg-zinc-600
                            active:bg-zinc-700
                            '>
                                <Link href={`http://localhost:3000/list/${list.id}`}>
                                    <button 
                                    className='
                                    flex h-full w-full justify-between
                                    px-4 py-2
                                    '
                                    >
                                        <p>{list.name}</p>
                                        <Icon 
                                        className='
                                        h-6 w-6
                                        text-zinc-50
                                        hover:text-zinc-400
                                        active:text-zinc-500
                                        ' 
                                        icon="carbon:close"
                                        onClick={() => deleteMutation.mutate(list)}
                                        />
                                    </button>
                                </Link>
                            </li>
                        }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}