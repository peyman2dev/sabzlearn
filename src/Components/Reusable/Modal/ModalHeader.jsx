import React from 'react'

export default function ModalHeader({children}) {
  return (
    <header className='flex items-center justify-between'>
            {children}
    </header>
  )
}
