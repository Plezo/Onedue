import { useState, useEffect } from 'react'
import { useStore } from '@nanostores/react';
import { Icon } from '@iconify/react';
import { addList, updateCurrent, lists, currentList, loadingState } from '../store/todoStore';

export default function Sidebar() {

    const $lists = useStore(lists);
    const $currentList = useStore(currentList);
    const $loadingState = useStore(loadingState);

    // Add some modal or a popup asking for the name
    const handleAddList = async (e) => {
        await addList("testingList");

        e.preventDefault();
    }

    const handleUpdateCurrent = async (e, list) => {
        await updateCurrent(list);

        e.preventDefault();
    }

    if ($loadingState !== 'loaded')
        return <div>LOADING!</div>;

    return (
        <div className='
        text-white border-r-[1px] mx-8 pt-8
        h-full w-7/12
        '>
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

            <div className='
            flex justify-between mx-4 mt-8
            '>
                <h1 className='text-white opacity-75'>Lists</h1>
                <button onClick={handleAddList}>
                    <Icon 
                    className='
                    h-6 w-6
                    text-zinc-50
                    hover:text-zinc-200
                    active:text-zinc-300
                    ' 
                    icon="carbon:add"/>
                </button>
            </div>
            {
                $lists.length === 0 ?
                <p>No lists</p> :
                <ul>
                    {$lists.map((list) => 
                        <li 
                        key={list.list_id}
                        className='
                        text-white mt-3 
                        mx-4 rounded-2xl
                        hover:bg-zinc-600
                        active:bg-zinc-700
                        '>
                            <button 
                            className='flex h-full w-full py-2 px-4'
                            onClick={(e) => handleUpdateCurrent(e, list)}>
                                <p>{list.list_name}</p>
                            </button>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}
