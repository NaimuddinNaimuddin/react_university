import axios from "axios"
import { useEffect, useState } from "react"
import './Services.css'
import { useDispatch, useSelector } from "react-redux"
import { getServices } from "../reducers/serviceReducer"

function Services(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.serviceReducer)
    console.log(state, 9)

    // const [data, setData] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        // axios.get('http://localhost:5000/api/services')
        //     .then(res => {
        //         console.log(res.data)
        //         setData(res.data.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        dispatch(getServices())

    }, [])

    return (<>
        {!props.hideSearchBar && (<input
            placeholder="Search"
            className="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)} />)}

        <div className="flex">
            {
                state.isLoading && <h1> LOADING....</h1>
            }

            {
                state &&
                    state.servicesData &&
                    state.servicesData.length > 0 ?
                    state.servicesData
                        .sort((a, b) => a.price - b.price)
                        .filter(item => {
                            return item.title.toLowerCase().includes(filter.toLowerCase()) || item.description.toLowerCase().includes(filter.toLowerCase())
                        })
                        .map((serviceItem, serviceIndex) => {
                            return (
                                <div style={{ padding: '10px 0px' }} key={serviceIndex + 1} className="card">
                                    <img width="100%" height="200px" src={`http://localhost:5000/${serviceItem?.imageUrl}`} />
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