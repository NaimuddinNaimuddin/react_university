import axios from "axios"
import { useEffect, useState } from "react"
import './Services.css'


function Services() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState('')

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

    return (<>
        <input
            placeholder="Search"
            className="filter" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <div className="flex">

            {
                data.length > 0 ?
                    data
                        .sort((a, b) => a.price - b.price)
                        .filter(item => {
                            return item.title.toLowerCase().includes(filter.toLowerCase()) || item.description.toLowerCase().includes(filter.toLowerCase())
                        })
                        .map((serviceItem, serviceIndex) => {
                            return (
                                <div key={serviceIndex + 1} className="card">
                                    <div className="title"> {serviceItem?.title}</div>
                                    <div className="desc"> {serviceItem?.description}</div>
                                </div>
                            )
                        })
                    : 'No Data Found'
            }

        </div>
    </>)
}

export default Services