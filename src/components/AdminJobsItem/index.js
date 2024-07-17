import "./index.css"
import { Link } from 'react-router-dom'
const AdminJobsItem = (props) => {
    const { details,admin, fun } = props
    const { jobrole, company, salary, lastdatetoapply, jobtype, location, industry, id } = details
    const x = () => {
        fun(id)
    }
    // const y = () => {
    //     fun1(id)
    // }
    return (

        <div className="adminJoblistCon1">

            <div className="adminJobslistCon1Inside1">
                <div className="adminJobslistCon1Inside2">
                    <p className="paraAJI2">{jobrole}</p>
                    <h1 className="headAJL2">{company}</h1>
                </div>
            </div>
            <hr className="horizontalLine" />
            <div className="adminJobslistCon1Inside1">
                <div className="adminJobslistCon1Inside2">
                    <p className="paraAJI1">Job type</p>
                    <h1 className="headAJL1">{jobtype}</h1>
                </div>

                <div className="adminJobslistCon1Inside2">
                    <p className="paraAJI1">Industry</p>
                    <h1 className="headAJL1">{industry}</h1>
                </div>

                <div className="adminJobslistCon1Inside2">
                    <p className="paraAJI1">CTC</p>
                    <h1 className="headAJL1">{salary}</h1>
                </div>

                <div className="adminJobslistCon1Inside2">
                    <p className="paraAJI1">Location</p>
                    <h1 className="headAJL1">{location}</h1>
                </div>

            </div>
            <hr className="horizontalLine" />
            <div className="adminJobslistCon1Inside3">
                <p className="paraAJI4">Last date to apply : {lastdatetoapply}</p>
                <Link className="item" to={`/jobdes/admin/${id}/${admin}`}>
                    <h1 className="headAJL3">View details</h1>
                </Link>
            </div>
            <button className="buttonAJL1" type="button" onClick={x}>Delete</button>
            <Link className="item" to={`/appliedmembers/${id}`}>
                    <h1 className="headA20">View applied members list</h1>
                </Link>
            {/* <button className="buttonAJL2" type="button" onClick={y}>View applied members list</button> */}
        </div>

    )
}
export default AdminJobsItem