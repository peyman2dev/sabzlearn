import React from 'react'
import Title from '../../Components/Title'
import { Helmet } from 'react-helmet'

export default function Courses() {
  return (
    <>
    <Helmet title='داشبورد | مدیریت دوره ها'/>
    <Title link={{
      title: "ایجاد دوره",
      url: "create"
    }} title={"داشبورد | دوره ها"}/>
    </>
  )
}