'use client';
import { IconPencilCheck } from '@tabler/icons-react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageUser = () => {

    const [loading, setLoading] = useState(false);
    const [userList, setuserList] = useState([]);

    const fetchUsers = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/user/getall')
        // console.log(res);
        console.log(res.data);
        setuserList(res.data);
        setLoading(false);
    }
    // console.log(userList);

    const deleteUser = async (userId) => {
        const res = await axios.delete(`http://localhost:5000/user/delete/${userId}`);
        if (res.status === 200) {
            fetchUsers();
            toast.success('User Deleted Successfully');
        } else {
            toast.error('Error in Deleting User');
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='min-h-1/2 bg-sky-300 py-20'>
            <h1 className='text-center font-bold text-3xl mb-10'>Manage Users</h1>

            <div className='container mx-auto bg-sky-700 '>
                {
                    loading ?
                        <p>Loading...Please Wait...!!</p>
                        :
                        (
                            <table className='w-full border-2 shadow-2xl'>
                                <thead className='bg-sky-900 text-white'>
                                    <tr className='text-left border-b-2 border-black'>
                                        <th className='px-2'>ID</th>
                                        <th className='px-2'>Name</th>
                                        <th className='px-2'>Email</th>
                                        <th className='px-2'>Registered At</th>
                                        <th className='px-2'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='text-left'>
                                    {
                                        userList.map((user) => {
                                            return (
                                                <tr key={user._id} className='border-b-2'>
                                                    <td className='p-2'>{user._id}</td>
                                                    <td className='p-2'>{user.name}</td>
                                                    <td className='p-2'>{user.email}</td>
                                                    <td className='p-2'>{user.createdAt}</td>
                                                    <td className='p-2'> 
                                                        <button className='bg-green-500 hover:bg-green-600 active:bg-green-800 text-white px-4 py-2 rounded-2xl border' >
                                                            <Link href={`/update-user/${user._id}`}>
                                                                <IconPencilCheck  />
                                                            </Link>
                                                        </button>
                                                        <button
                                                            onClick={() => { deleteUser(user._id) }}
                                                            className='bg-red-700 hover:bg-red-600 active:bg-red-800 text-white px-4 py-2 rounded-2xl ml-4 border' >Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        )
                }
            </div>

        </div>
    )
}

export default ManageUser;