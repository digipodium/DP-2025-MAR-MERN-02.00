'use client'
import React from 'react'

const EventHandling = () => {
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
                }}/>

        </div>
    )
}

export default EventHandling;