import Carousel from "./Carousel"
import Courses from "./Courses"
import Services from "./Services"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <div className="animate">
                <Link to="/posts"> Latest Post  </Link>
            </div>


            <Carousel></Carousel>
            <Services hideSearchBar={true} ></Services>
            <Courses></Courses>

        </div>
    )
}

export default Home