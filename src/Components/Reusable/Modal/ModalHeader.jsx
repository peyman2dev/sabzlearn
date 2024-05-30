import React from 'react'

export default function ModalHeader({children, style}) {
  return (
    <header className={`flex items-center justify-between ${style}`}>
            {children}
    </header>
  )
}
