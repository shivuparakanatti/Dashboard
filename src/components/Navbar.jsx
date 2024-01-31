import { MoreVertical } from 'lucide-react';
import React from "react";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-10 py-4 text-2xl'>
           
                <div className='flex items-center justify-between  '>
                    <div className='w-48'>
                        <h1>Kanban</h1>
                    </div>
                <div className='items-start justify-start'>
                    <h1>Name</h1>
                </div>
                </div>
            

            <div className='flex items-center justify-center gap-4 '>
                <button className='bg-blue-400 px-2 py-1 rounded-lg'>Add new Task</button>
                <MoreVertical />
            </div>
        </div>
    )
}

export default Navbar