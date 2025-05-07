'use client';
import React, { useState } from 'react'

const TodoList = () => {

    // let count = 0;
    // const [counter, setCounter] = useState(0);
    const [taskList, setTaskList] = useState([]);
    // tasklist = [];

    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            // console.log(e.target.value);

            const newTask = { text: e.target.value, completed: false };
            setTaskList([newTask, ...taskList]);

            e.target.value = '';
        }
    }

    const deleteTask = (index) => {
        // console.log(index);

        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    }

    return (
        <div className='min-h-screen bg-violet-300 py-10'>
            <h1 className='text-center font-bold text-4xl mb-8'>Todo List</h1>

            <div className='container mx-auto bg-whit rounded-lg'>

                {/* <h1 className='text-5xl'>
                    {counter}
                </h1>
                <button className='p-5 bg-violet-900 text-white text-2xl rounded-full'
                        onClick={() => {setCounter(counter + 1); console.log(counter)}}
                        >Click to ADD</button> */}

                <div className='p-5 border-2 border-violet-900 bg-white rounded-lg'>
                    <input type="text" className='border-2 w-full px-3 py-2'
                        placeholder='Enter task here...'
                        onKeyDown={addNewTask} />
                </div>

                <div className='p-5 border-2 border-violet-900 bg-white rounded-lg mt-5'>
                    <h1 className='text-2xl font-bold mb-5'>Tasks</h1>
                    {
                        taskList.map((task, index) => {
                            return (
                                <div key={index} className='border p-3 rounded-2xl mb-4 flex justify-between items-center px-5'>

                                    {
                                        task.completed
                                            ?
                                            <p>Completed</p>
                                            :
                                            <p>Pending</p>
                                    }

                                    <p className='text-xl'>{task.text}</p>

                                    <div className='flex gap-3'>
                                        <button className='bg-violet-900 hover:bg-violet-700 active:bg-violet-500 text-white px-3 py-2 rounded-lg'
                                            onClick={() => { deleteTask(index) }}>
                                            Delete
                                        </button>
                                        <button className={`${task.completed ? 'bg-red-700' : 'bg-green-700'} text-white px-3 py-2 rounded-lg`}
                                            onClick={() => { updateTask(index) }}>
                                            {task.completed ? 'Undo' : 'Done'}
                                        </button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </div>
    )
}

export default TodoList;