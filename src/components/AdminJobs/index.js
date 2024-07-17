import { Component } from 'react'
import AdminJobsItem from '../AdminJobsItem'
import Headeradmin from "../Headeradmin"
import "./index.css"
import { v4 as uuidv4 } from 'uuid'

class AdminJobs extends Component {
  state = {
    there1: true, list1: [], jobrole: "", company: "", salary: "",
    lastdatetoapply: "", jobtype: '', industry: "", location: "", description: "",showSubmitError: false,
        errorMsg: ''

  }

  fun1 = async (id) => {

    const options1 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    const responsedata = await fetch(`https://resumejobboardback.onrender.com/jobs/get/companyapplied/${id}`, options1)
    const data = await responsedata.text()
    console.log(data)
    const options2 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    }
    const responsedata1 = await fetch("https://resumejobboardback.onrender.com/jobs/get", options2)
    const y = await responsedata1.json()
    this.setState({ list1: y, there1: true, jobrole: "", company: "", salary: "", lastdatetoapply: "", description: "", location: '', jobtype: '', industry: "" })
  }

  fun = async (id) => {

    const options1 = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    const responsedata = await fetch(`https://resumejobboardback.onrender.com/delete/jobs/${id}`, options1)
    const data = await responsedata.text()
    console.log(data)
    const options2 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    }
    const responsedata1 = await fetch("https://resumejobboardback.onrender.com/jobs/get", options2)
    const y = await responsedata1.json()
    this.setState({ list1: y, there1: true, jobrole: "", company: "", salary: "", lastdatetoapply: "", description: "", location: '', jobtype: '', industry: "" })
  }
  add = async () => {
    const { jobrole, company, salary, lastdatetoapply, description, industry, jobtype, location } = this.state
    const id = uuidv4()
    if (jobrole !== "" && company !== "" && salary !== "" && lastdatetoapply !== "" && location !== "" && industry !== "" && jobtype !== "" && description !== "") {
      const data = {
        id,
        jobrole,
        company,
        salary,
        lastdatetoapply,
        description,
        location,
        industry,
        jobtype
      }
      console.log(data)

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      };


      const response = await fetch("https://resumejobboardback.onrender.com/jobs/post", options)
      const data1 = await response.text()
      console.log(data1)
      const options1 = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        }
      }
      const responsedata = await fetch("https://resumejobboardback.onrender.com/jobs/get/", options1)
      const y = await responsedata.json()
      this.setState({ list1: y, there1: true, jobrole: "", company: "", salary: "", lastdatetoapply: "", description: "", location: '', jobtype: '', industry: "" })
    }
    else{
      this.setState({showSubmitError:true,errorMsg:"Enter all the details"})
    }
  }
  w = (event) => {
    this.setState({ jobrole: event.target.value })
  }
  x = (event) => {
    this.setState({ company: event.target.value })
  }
  y = (event) => {
    this.setState({ salary: event.target.value })
  }

  z = (event) => {
    this.setState({ lastdatetoapply: event.target.value })
  }

  l = (event) => {
    this.setState({ location: event.target.value })
  }

  j = (event) => {
    this.setState({ jobtype: event.target.value })
  }

  i = (event) => {
    this.setState({ industry: event.target.value })
  }

  d = (event) => {
    this.setState({ description: event.target.value })
  }

  componentDidMount() {
    this.after()
  }
  after = async () => {

    const options1 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      }
    }
    const responsedata = await fetch("https://resumejobboardback.onrender.com/jobs/get", options1)
    const y = await responsedata.json()
    this.setState({ list1: y })
  }
  render() {
    const { there1, list1, showSubmitError, errorMsg, jobrole, company, salary, lastdatetoapply, description, industry, jobtype, location } = this.state
    return (
      <nav className='container14'>
        <Headeradmin />


        <div className='boxA1'>
          <h1 className='head14'>Enter the job details you want to add to the website</h1>

          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo'>Company</label>
            <input onChange={this.x} className='inputAJ1' id='todo' value={company} type='text' placeholder='Enter the Company name' />
          </div>


          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo2'>Industry</label>
            <input onChange={this.i} className='inputAJ1' id='todo2' value={industry} type='text' placeholder='Enter the Industry of Job' />
          </div>

          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo0'>Job Role</label>
            <input className='inputAJ1' onChange={this.w} id='todo0' value={jobrole} type='text' placeholder='Enter the Job role' />
          </div>

          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo0'>Job Type</label>
            <input className='inputAJ1' onChange={this.j} id='todo0' value={jobtype} type='text' placeholder='Enter the Job type' />
          </div>



          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo0'>Description</label>
            <input className='inputAJ1' onChange={this.d} id='todo0' value={description} type='text' placeholder='Enter the description' />
          </div>

          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo0'>Location</label>
            <input className='inputAJ1' onChange={this.l} id='todo0' value={location} type='text' placeholder='Enter the Job location' />
          </div>

          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo1'>Salary</label>
            <input onChange={this.y} className='inputAJ1' id='todo1' value={salary} type='text' placeholder='Enter the Salary' />
          </div>

          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo2'>Last date to apply</label>
            <input onChange={this.z} className='inputAJ1' id='todo2' value={lastdatetoapply} type='text' placeholder='Enter the last date to apply' />
          </div>

          <button className='but14' type='button' onClick={this.add}>Add</button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </div>



        {there1 && (
          <div>
            <h1 className='head14'>Jobs List</h1>

            <ul className='card14'>{
              list1.map(every =>
                (<AdminJobsItem admin="true" fun={this.fun} fun1={this.fun1} details={every} key={every.id} />))
            }</ul>
          </div>
        )}

      </nav>
    )
  }
}

export default AdminJobs