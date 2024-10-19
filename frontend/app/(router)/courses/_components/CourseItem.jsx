import React from 'react'

function CourseItem() {
  return (
      <div>
          <img src={course?.banner.url} alt="banner"
              width={500}
              height={150}  
              className='rounded-t-xl'
          />
          <div>
              <h2>{course.name } </h2>
              <h2>{course.authur } </h2>
          </div>
    </div>
  )
}

export default CourseItem