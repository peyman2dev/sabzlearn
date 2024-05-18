import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeToggle } from '../../../Utils/Redux/reducers/themeReducer'
import { Moon, Sun1 } from 'iconsax-react'

export default function ThemeButton() {
    const {isDark} = useSelector(state => state.theme)
    const dispatch = useDispatch()
    
  return (
    <div>
        <button onClick={() => dispatch(themeToggle())} className='w-12 h-12 rounded-full dark:bg-[#2F3542] bg-gray-50 flex items-center justify-center'>
            {
                isDark ? 
                <Moon />
                :
                <Sun1 />
            }
        </button>
    </div>
  )
}
