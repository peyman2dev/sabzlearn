import React, { useContext } from 'react'
import CategoriesProvider from '../../../Utils/Contexts/CategoriesProvider'
import _ from 'lodash'
import FilterButton from '../../Reusable/Buttons/FilterButton'

export default function Sidebar() {
    const {filters} = useContext(CategoriesProvider)
  return (
    <aside className='min-w-[294px] space-y-3'>
        {
            _.map(filters, filter => (
                <FilterButton key={filter.id} {...filter} />
            ))
        }
    </aside>
  )
}
