import "./index.css"
import { Link } from 'react-router-dom'
const JobItem = (props) => {
    const { details, openToApply, notApplied, applied } = props
    const { jobrole, company, salary, lastdatetoapply, jobtype, location, industry, id } = details
    const a=()=>{
        
        if (openToApply==='true'){
            return(
                <Link className="item" to={`/jobdes/open/${id}/${openToApply}/`}>
                       <h1 className="headAJL3">View details</h1>
                   </Link> 
           )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }

    const b=()=>{
        
        if (notApplied==="true"){
            return(
                <Link className="item" to={`/jobdes/not/${id}/${notApplied}/`}>
                       <h1 className="headAJL3">View details</h1>
                   </Link> 
           )
        }
        else{
            return(
                <div></div>
            )
        }
        
    }

    const c=()=>{
        if (applied==="true"){
            return(
                <Link className="item" to={`/jobdes/apply/${id}/${applied}`}>
                       <h1 className="headAJL3">View details</h1>
                   </Link> 
           )
        }
        else{
            return(
                <div></div>
            )
        }

        
    }

    return (

        <div className="adminJoblistCon11">

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
                
                {openToApply && a()}

                {notApplied && b()}

                {applied && c()}

            </div>
        </div>

    )
}
export default JobItem