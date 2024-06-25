import React from 'react'

const ModalFooter = ({children}) => {
  return (
    <footer className='flex bg-gray-100 dark:bg-dark-800 items-center justify-end py-2 gap-1 px-4'>
        {children}
    </footer>
  )
}

export default ModalFooter