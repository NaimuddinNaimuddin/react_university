import axios from 'axios'
import { useState } from 'react'
import './AddAdmin.css'
import { useNavigate } from 'react-router-dom'

function LoginAdmin() {
    const navigate = useNavigate()
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        console.log(userName, password)
        axios.post('http://localhost:5000/admin/login', {
            userName: userName,
            password,
        })
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('type', res.data.type)
                localStorage.setItem('token', res.data.token)
                navigate('/admin/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='card-admin'>
            <h1> LOGIN ADMIN </h1>
            <input
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='User Name' className='input-admin' type="text" />

            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' className='input-admin' type="password" />

            <button
                onClick={handleClick}
                className='submit-btn'> SUBMIT </button>
        </div>
    )
}

export default LoginAdmin