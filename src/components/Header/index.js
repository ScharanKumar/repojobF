import { Link, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import "./index.css"
const Header = (props) => {
    const { history } = props
    const {home, jobs}=props

    const a=()=>{
        if (home==="true"){
            return(
                <div >
                    <Link className="headerz1" to="/">
                        <p className="headerz1">Home</p>
                    </Link>
                </div>
            )
        }
        else{
            return(
                <div >
                    <Link className="headery1" to="/">
                        <p className="headery1">Home</p>
                    </Link>
                </div>
            )
        }
    }

    const b=()=>{
        if (jobs==="true"){
            return(
                <div >
                    <Link className="headerz1" to="/jobs">
                        <p className="headerz1">Jobs</p>
                    </Link>
                </div>
            )
            
        }
        else{
            return(
                <div >
                <Link className="headery1" to="/jobs">
                    <p className="headery1">Jobs</p>
                </Link>
            </div>
            )
            
        }
    }

    const y = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
    }
    return (
        <ul className='headercon11'>

            <div className='headerAcon'>
                <button className='buttonAH1'>J</button>
                <h1 className='headAH1'>Jackpot</h1>
            </div>
            <div className='headerAcon1'>

               {a()}
               {b()}

                {/* <div >
                    <Link className="headerz1" to="/">
                        <p className="headerz1">Home</p>
                    </Link>
                </div>

                <div >
                    <Link className="headery1" to="/openToApply">
                        <p className="headery1">Jobs</p>
                    </Link>
                </div> */}
                <button type='button' className='headerAB1' onClick={y}>Log Out</button>

            </div>


        </ul>

    )
}
export default withRouter(Header)