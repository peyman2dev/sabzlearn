import { Close } from '@mui/icons-material'
import React from 'react'
import ModalContext from '../../../../Utils/Contexts/ModalContext.js'

const ModalHeader = ({children}) => {
  const {isOpen, toggleModal} = React.useContext(ModalContext)
  return (
    <header className="flex items-center justify-between dark:bg-dark-sm bg-[#f5f5f5]  dark:bg-dark-800 p-3">
      {children}
        <button onClick={toggleModal}>
            <Close className='dark:opacity-50 text-xs' fontSize='16px' />
        </button>
    </header>
  )
}

export default ModalHeader