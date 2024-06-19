import React from 'react'

const ModalFooter = ({children}) => {
  return (
    <footer className='flex items-center justify-end py-3 gap-1 px-4'>
        {children}
    </footer>
  )
}

export default ModalFooter