import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'
import './index.css'

class BlogItemDetailsStudent extends Component {
  state = {
    there: false, list1: [], x: false, email: '', mobileno: '', showSubmitError: false,
    errorMsg: '',open:"",not:"",apply:"",admin1:""
  }

  a = (event) => {
    this.setState({ mobileno: event.target.value })
  }

  z = (event) => {
    this.setState({ email: event.target.value })
  }

  componentDidMount() {
    this.getBlogItemData()
  }
  y = async () => {
    const { match } = this.props
    const { params } = match
    const { id } = params
    const { mobileno, email } = this.state
    const id1 = uuidv4()
    if (mobileno !== "" && email !== "") {
      const name = Cookies.get('name')
      console.log(name)
      const data = {
        "mobile": `${mobileno}`,
        "name": `${name}`,
        "ids": `${id1}`,
        "email": `${email}`,
      }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        },
        body: JSON.stringify(data),
      }
      const response = await fetch("https://resumejobboardback.onrender.com/studentapply/post", options)
      const data1 = await response.text()
      console.log(data1)

      const data2 = {
        "id": `${id}`,
        "name": `${name}`,
        "ids": `${id1}`
      }
      const options1 = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        },
        body: JSON.stringify(data2),
      }
      const response1 = await fetch("https://resumejobboardback.onrender.com/applyjob/post", options1)
      const data3 = await response1.text()
      console.log(data3)


      this.setState((prevState) => ({ x: !prevState.x }))
    }
    else {
      this.setState({ showSubmitError: true, errorMsg: "Enter both Mobile No and Email" })
    }

  }

  show=()=>{
    const {mobileno,email,open,not,admin1}=this.state
    if (open==="true"){
      return(
        <div>
        <div className='x14'>
            <label className='labelAJ1' htmlFor='todo1'>Mobile Number</label>
            <input onChange={this.a} className='inputSD1' id='todo1' value={mobileno} type='text' placeholder='Enter your Mobile Number' />
          </div>

          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo2'>Email</label>
            <input onChange={this.z} className='inputSD1' id='todo2' value={email} type='text' placeholder='Enter your Email' />
          </div>
          {this.apply()}
          </div>
      )
    }
    else if (not==="true"){
      return(
        <div>
          <button className='butjobdetails3'>Didn't Apply</button>
        </div>
      )
    }
    else if (admin1==='true'){
      return(
        <div></div>
      )
    }
    else{
      return(
        <div>
          <button className='butjobdetails3'>Applied</button> 
        </div>
      )
    }
  }

  apply = () => {
    const { x } = this.state
    console.log(x)
    if (x === true) {
      return (
        <button className='butjobdetails2'>Applied</button>
      )
    }
    else {
      return (
        <button className="butjobdetails1" onClick={this.y}>Apply</button>
      )
    }
  }

  getBlogItemData = async () => {
    const { match } = this.props
    const { params } = match
    const { id, openToApply, notApplied, applied, admin} = params
    console.log(openToApply, notApplied, applied)

    const response = await fetch(`https://resumejobboardback.onrender.com/jobdes/${id}`)
    const data = await response.json()
    this.setState({ list1: data, there: true,admin1:admin, open:openToApply, apply:applied, not:notApplied })

  }

  renderBlogItemDetails = () => {
    const { list1, there, showSubmitError, errorMsg } = this.state
    if (there === false) return (<div></div>)
    const { jobrole, jobtype, location, salary, industry, description, company, lastdatetoapply } = list1[0]

    return (
      <div className="adminJoblistCon13">
        <div className='con1ok'>
          <div className="adminJobslistCon1Inside1">
            <div className="adminJobslistCon1Inside2">
              <p className="paraAJI2">{jobrole}</p>
              <h1 className="headAJL2">{company}</h1>
            </div>
          </div>

          <div className="adminJobslistCon1Inside13">
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
              <p className="paraAJI1">Last date to apply</p>
              <h1 className="headAJL1">{lastdatetoapply}</h1>
            </div>

          </div>
          <h1 className='headAJL9'>Eligibility criteria</h1>
          <p className='headAJL10'>Education Criteria : Any
            Pass out year: 2014 - 2024<br />
            Build Your Own Static Website: 75% of the course completion is required.<br />
            Build Your Own Responsive Website: 75% of the course completion is required.<br />
            Build Your Own Dynamic Web Application: 75% of the course completion is required.<br />
            Programming Foundations: 75% of the course completion is required.<br />
            Introduction To Databases: 75% of the course completion is required.<br />
            Data Structures and Algorithms: 50% of the course completion is required.</p>

          <div className="adminJobslistCon1Inside12">
            <p className="headAJL8">Description</p>

            <h1 className="headAJL1">{description}</h1>

          </div>
        </div>
        <div className='con2ok'>
          <img src='https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-workspace-icon-png-image_4013881.jpg' className="imgDesJob" alt='desImage' />
          
          {this.show()}
          {/* <div className='x14'>
            <label className='labelAJ1' htmlFor='todo1'>Mobile Number</label>
            <input onChange={this.a} className='inputSD1' id='todo1' value={mobileno} type='text' placeholder='Enter your Mobile Number' />
          </div>

          <div className='x14'>
            <label className='labelAJ1' htmlFor='todo2'>Email</label>
            <input onChange={this.z} className='inputSD1' id='todo2' value={email} type='text' placeholder='Enter your Email' />
          </div>
          {this.apply()} */}
          <div className="adminJobslistCon1Inside2">
            <p className="headAJL1">Job Location</p>
            <h1 className="paraAJI1">{location}</h1>
          </div>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </div>
      </div>

    )
  }

  render() {

    return (
      <div >
        {
          this.renderBlogItemDetails()
        }
      </div>
    )
  }
}

export default BlogItemDetailsStudent