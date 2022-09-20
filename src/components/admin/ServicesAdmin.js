import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ServicesAdmin.css'


function ServicesAdmin() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/home')
        }
    }, [])

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleClick = () => {
        console.log(title, desc, 19)
        axios.post('http://localhost:5000/api/services', {
            title: title,
            description: desc,
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err, "err")
            })
    }

    return (
        <div className="admin-card">
            <input value={title} onChange={handleChange} placeholder='title' className='input-admin' /> <br />
            <input value={desc} onChange={handleChangeDesc} placeholder='description' className='input-admin' /> <br />
            <button
                onClick={handleClick}
                className='add-btn'>
                ADD SERVICE
            </button>
        </div>
    )
}

export default ServicesAdmin