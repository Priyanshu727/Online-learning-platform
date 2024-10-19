"use client"
import React from 'react'
import { useEffect } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'

function CoursePreview() {
    useEffect(() => { 
        console.log(params)
    },[])

  return (
      <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
          {/* title video description */}
          <div className="col-span-2 bg-white p-3">
              <CourseVideoDescription/>
          </div>   
    </div>
  )
}

export default CoursePreview