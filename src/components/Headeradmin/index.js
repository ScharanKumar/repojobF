import { Link, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import "./index.css"
const Headeradmin = (props) => {
    const { history } = props
    const x = () => {
        Cookies.remove('jwt_token1')
        history.replace('/login/admin')
    }
    return (
        <ul className='headercon1'>

            <div className='headerAcon1'>
                <button className='buttonAH1'>J</button>
                <h1 className='headAH1'>Jackpot</h1>
            </div>
            <div className='headerAcon1'>

                <li className='headerli1'>
                    <Link className="headerx1" to="/admin/jobs">Jobs List</Link>
                </li>
                <button type='button' className='headerAB1' onClick={x}>Log Out</button>
            </div>
        </ul>

    )
}
export default withRouter(Headeradmin)