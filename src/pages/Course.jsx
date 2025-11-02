import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Course = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold ' to="/Courses/BTech" >BTech</Link>
        <Link className='text-xl font-semibold' to="/Courses/BPharma" >BPharma</Link>
        <Link className='text-xl font-semibold' to="/Courses/MBA" >MBA</Link>
      </div>
        <Outlet/>
    </div>
  )
}

export default Course