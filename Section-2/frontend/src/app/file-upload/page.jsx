'use client';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const FileUpload = () => {

    const [preview, setPreview] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const upload = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'Mern_3:30')
        fd.append('cloud_name', 'dzjjvydkz')

        axios.post('https://api.cloudinary.com/v1_1/dzjjvydkz/image/upload', fd)
            .then((result) => {
                toast.success('File upload successfully');
                console.log(result.data);
                setPreview(result.data.url);
                setImageUrl(result.data.url);
            }).catch((err) => {
                console.log(err);
                toast.error('failed to upload file');
            });
    }

    return (
        <div className='flex flex-col justify-around items-center h-sc py-20 gap-4'>
            <h1 className='text-5xl'>File Upload</h1>

            <label htmlFor="" className='text-2xl mt-20'>Upload Image Here</label>
            <input type="file" onChange={upload} className='p-6 bg-amber-200' />
            {
                preview && (
                    <div>
                        <img src={preview} alt="" width={400} />
                        <p className='text-2xl mt-4'>Image URL: {imageUrl}</p>
                    </div>
                )
            }

        </div>
    )
}

export default FileUpload;