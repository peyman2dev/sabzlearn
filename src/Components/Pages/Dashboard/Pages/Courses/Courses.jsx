import React, { useContext, useEffect } from 'react'
import DashboardContext from '../../../../../Utils/Contexts/DashboardContext'

export default function Courses() {
  const {routing} = useContext(DashboardContext)

  useEffect(() => {
    routing.setRouteTitle("دوره ها")
  }, [])
  return (
    <div>Courses</div>
  )
}
