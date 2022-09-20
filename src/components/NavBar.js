import './NavBar.css'

import { Link, useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    return (
        <div className="flex justify-content-space-between bg-navbar plr-10 ptb-20">
            <div>
                UNIVERSITY
            </div>
            <div className='flex'>
                <div className='pl-10 nav-links'> <Link className='link' to="/home">HOME</Link>  </div>
                <div className='pl-10 nav-links'> <Link className='link' to="/about">ABOUT</Link> </div>
                <div className='pl-10 nav-links'> <Link className='link' to="/courses">COURSES</Link> </div>
                <div className='pl-10 nav-links'> <Link className='link' to="/services">SERVICES</Link> </div>
                <div className='pl-10 nav-links'> <Link className='link' to="/contact">CONTACT</Link> </div>
                {
                    localStorage.getItem('token') &&
                    <div className='pl-10 nav-links'> <Link className='link' to="/admin/services">ADD SERVICES </Link> </div>

                }
                {
                    localStorage.getItem('token') && localStorage.getItem('type') === 'ADMIN' &&
                    <div className='pl-10 nav-links'> <Link className='link' to="/admin/list"> LIST ADMINS </Link> </div>

                }

                {
                    localStorage.getItem('token') ?
                        <button onClick={() => {
                            localStorage.clear()
                            navigate('/admin/dashboard')
                        }}> LOGOUT </button> :
                        <button onClick={() => {
                            navigate('/admin/login')
                        }}
                        > LOGIN </button>
                }
            </div>


        </div>
    )
}

export default NavBar