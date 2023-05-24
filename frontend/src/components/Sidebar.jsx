import { useState, useEffect } from 'react'
import { useStore } from '@nanostores/react';
import { Icon } from '@iconify/react';
import { getAllLists, addList, updateCurrent, lists, currentList } from '../store/todoStore';

export default function Sidebar() {

    const $lists = useStore(lists);
    const $currentList = useStore(currentList);

    useEffect(() => {
        getAllLists();
    }, []);

    // Add some modal or a popup asking for the name
    const handleAddList = (e) => {

    }

    return (
        <div className='text-white'>
            <ul>
                <li>
                    <p>Inbox</p>
                </li>
                <li>
                    <p>Today</p>
                </li>
                <li>
                    <p>Upcoming</p>
                </li>

                <li className='separator'>
                    <h1>Lists</h1>
                    <button onClick={handleAddList}>
                        <Icon name="carbon:add"/>
                    </button>
                </li>

                {$lists.map((list) => 
                    <li key={list.list_id}>
                        <button onClick={() => updateCurrent(list)}>
                            <p>{list.list_name}</p>
                            <Icon name="carbon:add"/>
                        </button>
                    </li>
                )}

            </ul>
        </div>
    )
}
