import { BadgeIcon, BookOpen, GraduationCap, icons, LayoutGrid, Mail } from 'lucide-react'
import React from 'react'

function SideNav() {
    const menu = [
        {
            id: 1,
            name: 'All Courses',
            icons: BookOpen,
            path:'/courses'
        },
      
        {
            id: 2,
            name: 'Membership',
            icons: BadgeIcon,
            path:'/membership'
        },
        {
            id: 3,
            name: 'Be Instructor',
            icons: GraduationCap,
            path:'/instructor'
        },
        {
            id: 5,
            name: 'Newsletter',
            icons: Mail,
            path:'/newsletter'
        }
    ]
    return (
        <div className='p-5 bg-white shadow-sm border h-screen'>
            <img src="/e-learning.png" alt="logo"
                width={170} height={80} />
            <hr className='mt-7' />
            {/* Menu List */}
            <div className='mt-8'>
                {menu.map((item, index) => (
                    <div className='group flex gap-3 mt-1 p-3 text[18px] items-center text-gray-700 cursor-pointer hover:bg-primary
                    hover:text-white
                    rounded-md
                    transition-all ease-in-out duration-200'>
                        <item.icons className='group-hover:animate' />
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav