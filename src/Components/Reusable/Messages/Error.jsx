import React from 'react'

export default function Error({
    errors,
    target
}) {
  return (
    errors[target] && <p className='text-xs py-2 text-red-500'>* {errors[target].message}</p>
  )
}
