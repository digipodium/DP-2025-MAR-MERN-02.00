import React from 'react'

const Card = ({ title, description }) => {
    return (
        <div className='p-6 bg-rose-400 rounded-lg shadow-2xl hover:bg-rose-500 transition duration-600 ease-in-out'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <p className='text-xl'>{description}</p>
        </div>
    )
}

export default Card;