'use client'
import React from 'react'

const EventHandling = () => {

    const previewImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (data) => {
            const img = new Imxage();
            img.src = data.target.result;
            document.body.appendChild(img);
        }
        reader.readAsDataURL(file);
    }

    return (
        <div className='w-4/5 mx-auto space-y-8 py-20'>
            <h1 className='text-2xl font-bold text-center'>Event Handling</h1>

            <button className='bg-black text-white p-5' onClick={() => { alert('Button is Clicked') }} >Click Event</button>

            <div className='w-1/2 h-96 bg-rose-300 mx-auto'
                onMouseMove={(e) => { console.log(e.clientX, e.clientY) }}>
                Move Mouse Here
            </div>

            <input type="text" className='border-2 p-3 w-1/2'
                placeholder='Try something and press keys'
                onKeyDown={(e) => {
                    console.log('Key Pressed:', e.key);
                    console.log('Key Code:', e.code);
                }} />

            <input type="text" className='border-2 block p-3 w-1/2'
                placeholder='Enter Text...'
                onChange={(e) => { console.log(e.target.value) }}
            />

            <input type="color" onChange={(e) => { document.body.style.backgroundColor = e.target.value }} />

            <input type="file" className='p-5 border-2 bg-amber-300 block rounded-4xl' 
                accept='image/*' onChange={previewImage}/>

        </div>
    )
}

export default EventHandling;