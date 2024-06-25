import React from 'react'

const Table = ({children}) => {
  return <div className='custom-table mt-10 bg-white dark:bg-dark-800 rounded-sm shadow-md'>
    {children}
  </div>
}

export default Table