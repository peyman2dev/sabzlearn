import React, { useContext } from 'react'
import DashboardContext from '../../../../../Utils/Contexts/Dashboard/DashboardContext'
import Profile from '../../../../Reusable/Dropdowns/Profile'

export default function Header() {
    const {routing} = useContext(DashboardContext)
  return (
    <div className='w-full flex items-center justify-between py-4 mb-5 px-8'>
        <p className='text-2xl select-none font-Dana-Medium'>
     

    {
      routing.routeTitle
    }
        </p>
        <div className='flex items-center child: gap-3'>
        <Profile customStyle="bg-[white!important] text-[#3a3a3a!important]" />
        </div>
    </div>
  )
}
