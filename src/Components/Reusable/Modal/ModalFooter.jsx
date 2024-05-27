import React from 'react'

export default function ModalFooter({children}) {
  return (
    <footer className='p-5 gap-1 flex justify-end items-center'>
        {children}
    </footer>
  )
}
