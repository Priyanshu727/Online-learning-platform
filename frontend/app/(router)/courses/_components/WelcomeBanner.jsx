import React from 'react'

function WelcomeBanner() {
    return (
        <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
            <img src="/hh.png" alt="hh"
                width={100} height={100} />
            <div className="div">
                <h2 className='font-bold text-[27px]'>
                    Welcome to <span className='text-primary'>E-learning</span>
                </h2>
                <p className='text-gray-400'>Explore,Learn and Build All Real Life Projects</p>
            </div>
        </div>
    )
}

export default WelcomeBanner