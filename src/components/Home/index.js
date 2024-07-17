import Cookies from "js-cookie"
import { Redirect } from 'react-router-dom'
import Header from "../Header"
import "./index.css"


const Home = (props) => {
    const token = Cookies.get("jwt_token")
    if (token === undefined) {
        return (<Redirect to="/register" />)
    }



    return (
        <div className="homeCon1">
            <Header home="true" jobs="false" />
            <div className="homeCon2">
                <div>
                    <h1 className="headHomepage1"><span className="spanColor">Building</span> Careers,<br />
                        <span className="spanColor">Digitizing</span> Campuses,<br />
                        <span className="spanColor">Revolutionizing</span><br />Recruitments
                    </h1>
                    <p className="paraHomepage1">The fastest growing career development platform that brings together <br />
                        academia, companies, students, and alumni in a single place to <br />
                        collaborate and grow. Explore the cutting-edge developments and <br />latest insights shaping the recruitment sector and higher education institutions.
                    </p>
                </div>

                <img alt="HomepageImage" className="homepageImage" src="https://cdn-icons-png.flaticon.com/512/6171/6171795.png" />
            </div>
        </div>
    )
}

export default Home