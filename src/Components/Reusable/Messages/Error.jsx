import React from 'react'

export default function Error({
    errors,
    target
}) {
  return (
    errors[target] && <p className='text-xs text-red-500'>* {errors[target].message}</p>
  )
}
