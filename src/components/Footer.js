import { Link } from "react-router-dom"
import './Footer.css'


function Footer() {
    return (
        <div className="footer-card">
            <div>
                <a className="a-link" href="/ghg.vbn.com"> Facbook </a>
                <a className="a-link" href="/ghg.vbn.com">  Instagram </a>
                <a className="a-link" href="/ghg.vbn.com"> Twitter </a>
                <a className="a-link" href="/ghg.vbn.com"> Youtube </a>
            </div>
            <div>
                <Link className="a-link" to='/about' > About Us </Link>
                <Link className="a-link" to='/contact' > Contact Us </Link>
                <Link className="a-link" to='/home' > ABC University </Link>
            </div>
        </div>
    )
}


export default Footer