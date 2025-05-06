'use client';
import React, { useState } from 'react'

const TodoList = () => {

    // let count = 0;
    // const [counter, setCounter] = useState(0);
    const [taskList, setTaskList] = useState([]);
    // tasklist = [];

    const addNewTask = (e) => {
        if (e.code === 'Enter'){
            console.log(e.target.value);

            const newTask = {text: e.target.value};
            setTaskList([newTask, ...taskList]);

            e.target.value = '';
            // console.log(taskList);

            
        }
    }

    return (
        <div className='min-h-screen bg-violet-300 py-10'>
            <h1 className='text-center font-bold text-4xl mb-8'>Todo List</h1>

            <div className='container mx-auto bg-white rounded-lg'>

                {/* <h1 className='text-5xl'>
                    {counter}
                </h1>
                <button className='p-5 bg-violet-900 text-white text-2xl rounded-full'
                        onClick={() => {setCounter(counter + 1); console.log(counter)}}
                        >Click to ADD</button> */}

                <div className='p-5 border-2 border-violet-900 rounded-lg'>
                    <input type="text" className='border-2 w-full px-3 py-2' 
                        placeholder='Enter task here...'
                        onKeyDown={addNewTask}/>
                </div>


            </div>
        </div>
    )
}

export default TodoList;