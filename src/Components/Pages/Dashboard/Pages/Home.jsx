import React from 'react'
import DataCard from '../Components/Cards/DataCard'

export default function Home() {
  return (
    <>
      <section className='flex items-center gap-3'>
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
      </section>
    </>
  )
}
