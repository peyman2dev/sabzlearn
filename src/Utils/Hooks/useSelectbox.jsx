import React, { useState } from 'react'

const useSelectbox = () => {
    const [open, setOpen] = useState(false)
    const [selected,setSelected] = useState(null)

    const quickSelect = target => setSelected(target)
    const onOpen = () => setOpen(!open)

    return {
        open, setOpen, quickSelect, onOpen, selected
    }
    
}

export default useSelectbox