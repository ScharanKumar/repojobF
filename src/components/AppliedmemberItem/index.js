import "./index.css"
const AppliedmemberItem=(props)=>{
    const {details}=props
    const {name,email,mobile}=details

    return(
        <div className="card15">
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{mobile}</h1>
        </div>
    )
}

export default AppliedmemberItem