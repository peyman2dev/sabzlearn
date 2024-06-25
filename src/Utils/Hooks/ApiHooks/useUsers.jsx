import { useQuery } from '@tanstack/react-query'
import React from 'react'
import api from '../../Api/api'

const getUsers = () => {
    return api.get('/users')
    .then(r => r.data)
    .then(d => d)
}

const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers
  })
}

export default useUsers