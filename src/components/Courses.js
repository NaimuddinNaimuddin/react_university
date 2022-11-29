

import axios from "axios"
import { useEffect, useState } from "react"
import './Courses.css'
import { getCourses } from "../reducers/courseReducer"
import { useDispatch, useSelector } from "react-redux"

function Courses() {
    const dispatch = useDispatch()
    const courseState = useSelector(state => state.courseReducer)

    useEffect(() => {
        dispatch(getCourses())
    }, [])

    return (
        <div className="flex">


            {
                courseState.courseData &&
                    courseState.courseData.length > 0 ?
                    courseState.courseData.map((serviceItem, serviceIndex) => {
                        return (
                            <div key={serviceIndex} className="cou-card">
                                <div className="c-title"> {serviceItem?.title}</div>
                                <div className="c-desc"> {serviceItem?.description}</div>
                            </div>
                        )
                    })
                    : 'No Data Found'
            }

        </div>
    )
}

export default Courses