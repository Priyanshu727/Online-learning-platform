import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import CourseItem from './CourseItem';


function CourseList() {
    const [courseList, setCourseList] = useState([]); // Initialize with an empty array

    useEffect(() => {
        getAllCourseList();
    }, []);

    const getAllCourseList = () => {
        GlobalApi.getAllCourseList().then(resp => {
            setCourseList(resp?.courseList || []); // Ensure it's an array
        });
    }

    return (
        <div className='p-5 bg-white rounded-lg mt-3'>
            <div className='flex items-center  justify-between'>
                <h2 className='text-[20px] font-bold text-primary'>
                    All Course
                </h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">All</SelectItem>
                        <SelectItem value="dark">Paid</SelectItem>
                        <SelectItem value="system">free</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            {/* display course List */}
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                {courseList.map((item, index) => { 
                    <div key={index}>
                        <CourseItem course={item} />
                       
                   </div>
                }) }
            </div>
        </div>
    );
}

export default CourseList;
