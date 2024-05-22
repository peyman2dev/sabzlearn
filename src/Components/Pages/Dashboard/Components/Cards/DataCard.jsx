import React from 'react'

export default function DataCard(props) {
  return (
    <article className='flex items-center gap-4 w-[249px] bg-white dark:bg-[#111C44] p-5 rounded-2xl'>
        <div className='dark:bg-[#1B254B] bg-[#F4F7FE] rounded-full overflow-hidden w-12 h-12  flex items-center justify-center'>
        {props.icon}
        </div>
        <div>
            <p className='text-sm text-[#A3AED0]'>
                {props.title}
            </p>
            <h4 className='mt-1 font-Dana-Bold text-xl'>
                {props.value.toLocaleString()}
            </h4>
        </div>
    </article>
  )
}
