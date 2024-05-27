import React from 'react'
import { Close } from '@mui/icons-material'

export default function ModalHeader({title, action}) {
  return (
    <header className="py-4 px-5 flex items-center justify-between">
    <p className="text-lg text-slate-800 font-Dana-Demi">{title}</p>
    <button onClick={action} className="text-slate-500">
            <Close />
          </button>
    </header>
  )
}
