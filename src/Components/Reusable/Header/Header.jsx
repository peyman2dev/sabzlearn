import React from 'react'
import Windows from './Windows'
import Mobile from './Mobile'

export default function Header() {
  return (
    <header className='lg:p-7 bg-white dark:bg-[#242A38]'>
        <Windows />
        <Mobile />
    </header>
  )
}