import React, { useContext } from 'react'
import Filter from './Filters/Filter'
import _ from 'lodash'
import CategoriesProvider from '../../../../../Utils/Contexts/CategoriesProvider'

export default function Sidebar() {
    const {filters} = useContext(CategoriesProvider)

  return (
    <aside className='w-[294px] child:w-full child:h-[67px] child:bg-white child:shadow child:rounded-xl child:justify-between child:flex child:items-center child:p-5 child:dark:bg-[#1c2842] space-y-6'>
        {
            _.map(filters, (filter) => (
                <Filter 
                key={filter.id}
                {...filter}
                />
            ))
        }
    </aside>
  )
}
