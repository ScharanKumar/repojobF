import { Component } from "react"
import AppliedmemberItem from "../AppliedmemberItem"
import "./index.css"

class Appliedmembers extends Component{
    state={list:[],there:false}

    componentDidMount() {
        this.after()
      }

      after = async () => {

       const {match}=this.props
       const {params}=match
       const {id}=params
        const options1 = {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
        const responsedata = await fetch(`https://resumejobboardback.onrender.com/jobs/get/companyapplied/${id}`, options1)
        const data = await responsedata.json()
        console.log(data)
        if (data.length!==0){
          this.setState({there:true})
        }
        this.setState({ list: data })
      }  

      nothing=()=>{
        const {there}=this.state
        if (there===false){
          return(
            <div>
              <p className='paraJobs'>There is nothing to show here currently. </p>
            </div>
          )
        }
        
      }

    render(){
        const {list, there}=this.state
        return(
            <div className="appliedJMCon">
            {there && (
                <div >
                  <h1 className='head14'>Applied members of this company</h1>
      
                  <ul>{
                    list.map(every =>
                      (<AppliedmemberItem details={every} key={every.id} />))
                  }</ul>
                </div>
              )}
              {this.nothing()}
              </div>
        )
    }
}

export default Appliedmembers