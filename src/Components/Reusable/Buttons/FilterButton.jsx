import React, { useContext, useEffect, useState } from 'react'
import CategoriesProvider from '../../../Utils/Contexts/CategoriesProvider'
import { useParams } from 'react-router-dom'

export default function FilterButton(props) {
    const [isActive, setIsActive] = useState(false)
    const {resetHandler} = useContext(CategoriesProvider)
    const path = useParams()


    const clicked = () => {
            setIsActive(prev => !prev)
    }

    useEffect(() => {
        resetHandler(setIsActive)
        if (isActive) {
            props.handler({
                targetID: props.id,
                isActive,
                setIsActive
            })
        } else {
            props.handler({
                targetID: props.id,
                isActive: false,
                setIsActive
            })
        }
    }, [isActive])
    
  return (
    <div onClick={clicked} className='select-none cursor-pointer w-full h-[68px] dark:bg-[#242a38]  rounded-xl dark:border-white/5  dark:border-t-white/15 dark:border-r-white/10 bg-white border flex items-center justify-between px-5'>
        <span>
            {props.title}
        </span>

        <button className={`w-12 p-0.5 h-6 flex items-center rounded-3xl duration-150 bg-gray-200 ${isActive ? "bg-sky-600" : "dark:bg-[#333c4c]"} `}>
            <span className={`min-w-6 min-h-6 rounded-full duration-150 ${isActive ? "bg-white -translate-x-5" : "dark:bg-[#111827]"}`}></span>
        </button>
    </div>
  )
}
