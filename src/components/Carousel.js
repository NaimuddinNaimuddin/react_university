import { useEffect, useState } from 'react'
import axios from 'axios'
import './Carousel.css'

function Carousel() {

    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
    console.log(index)
    useEffect(() => {
        const i = setInterval(() => {
            setIndex(preindex => preindex < data.length - 1 ? preindex + 1 : 0)
        }, 3005)

        return () => clearInterval(i)
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/slider')
            .then(res => {
                console.log(res.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <img src={data.length > 0 && data[index]} width="100%" height={400} />
            <div className="flex mlr-10 center">
                {
                    data.length > 0 &&
                    data.map((imgItem, imgIndex) => {
                        return (
                            <div
                                key={imgIndex + 1}
                                style={imgIndex === index ? {
                                    margin: '10px',
                                    background: 'red',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',

                                }
                                    : {
                                        margin: '10px',
                                        background: '#e5e5e5',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                    }
                                }> </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel