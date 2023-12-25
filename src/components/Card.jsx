import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Card = ({tittle, current_value}) => {

  return (
    <div className='flex flex-col items-center bg-white p-4 gap-2 rounded-lg w-full h-56'>
      <span className='text-slate-400 text-start'>{tittle}</span>
      <h1 className='font-bold text-5xl'>{current_value}</h1>
      <p><FaArrowUpLong className='inline'/><span className='text-lg'> 20 %</span></p>
      <p>vs previous 30 days</p>
    </div>
  )
}

export default Card
