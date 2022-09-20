

import axios from "axios"
import { useEffect, useState } from "react"
import './Courses.css'


function Courses() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/services')
            .then(res => {
                console.log(res.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="flex">


            {
                data.length > 0 ?
                    data.map((serviceItem, serviceIndex) => {
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