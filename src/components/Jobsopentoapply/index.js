import { Component } from 'react'
import JobItem from '../JobItem'
// import { Link } from "react-router-dom"
import Header from "../Header"
import Cookies from 'js-cookie'
import "./index.css"

class Jobsopentoapply extends Component {
  state = { there1: false, list1: [], openToApply:true, applied:false, notApplied:false}
  componentDidMount() {
    this.openGet()
  }
  openGet = async () => {
    const name = Cookies.get('name')
    console.log(name)
    const options1 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      }
    }
    const responsedata = await fetch(`https://resumejobboardback.onrender.com/jobs/get/opentoapply/${name}`, options1)
    const y = await responsedata.json()
    console.log(y.length)
    if (y.length!==0){
      this.setState({there1:true})
  }
    this.setState({ list1: y, openToApply:true, applied:false, notApplied:false })
  }

  appliedGet = async () => {
    const name = Cookies.get('name')
    console.log(name)
    const options1 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      }
    }
    const responsedata = await fetch(`https://resumejobboardback.onrender.com/jobs/get/applied/${name}`, options1)
    const y = await responsedata.json()
    console.log(y)
    if (y.length!==0){
      this.setState({there1:true})
  }
    this.setState({ list1: y, openToApply:false, applied:true, notApplied:false })
  }

  notAppliedGet = async () => {
    const name = Cookies.get('name')
    console.log(name)
    const options1 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      }
    }
    const responsedata = await fetch(`https://resumejobboardback.onrender.com/jobs/get/notappliedontime/${name}`, options1)
    const y = await responsedata.json()
    console.log(y.length)
    if (y.length!==0){
        this.setState({there1:true})
    }
    this.setState({ list1: y, openToApply:false, applied:false, notApplied:true })
  }

  a=()=>{
    const {openToApply}=this.state
    if (openToApply===true){
      return(
        <div >
              <button onClick={this.openGet} className="headerz">Open to Apply</button>
              <hr className='horizon' />
          </div>
      )
    }
    else{
      return(
        <div >
              <button onClick={this.openGet} className="headery">Open to Apply</button>
          </div>
      )
    }
  }

  b=()=>{
    const {notApplied}=this.state
    if (notApplied===true){
      return(
        <div >
        <button onClick={this.notAppliedGet} className="headerz">Not applied</button>
        <hr className='horizon' />
    </div>
      )
    }
    else{
      return(
        <div >
              <button onClick={this.notAppliedGet} className="headery">Not applied</button>
          </div>
      )
    }
  }

  c=()=>{
    const {applied}=this.state
    if (applied===true){
      return(
        <div >
        <button onClick={this.appliedGet} className="headerz">Applied</button>
        <hr className='horizon' />
    </div>
      )
    }
    else{
      return(
        <div >
        <button onClick={this.appliedGet} className="headery">Applied</button>
    </div>
      )
    }
  }
  
  nothing=()=>{
    const {there1}=this.state
    if (there1===false){
      return(
        <div>
          <p className='paraJobs'>There is nothing to show here currently. </p>
        </div>
      )
    }
    
  }

  open=()=>{
    const {list1, there1}=this.state
    return(
      <div>
      <h1 className='head15'>Oppurtunities Avaliable</h1>

      {there1 && (
        <ul className='card15'>{
          list1.map(every =>
            (<JobItem openToApply="true" applied="false" notApplied="false" details={every} key={every.id} />))
        }</ul>
      )}
      {this.nothing()}
      </div>
    )
  }

  not=()=>{
    const {list1, there1}=this.state
    return(
      <div>
      <h1 className='head15'>Not Applied Jobs</h1>

{there1 && (
  <ul className='card15'>{
    list1.map(every =>
      (<JobItem openToApply="false" applied="false" notApplied="true" details={every} key={every.id} />))
  }</ul>
)}
{this.nothing()}
      </div>
    )
  }

  apply=()=>{
    const {list1, there1}=this.state
    return(
      <div>
      <h1 className='head15'>Applied Jobs</h1>

{there1 && (
  <ul className='card15'>{
    list1.map(every =>
      (<JobItem openToApply="false" applied="true" notApplied="false" details={every} key={every.id} />))
  }</ul>
)}
{this.nothing()}
      </div>
    )
  }

  render() {
    const {  openToApply, applied, notApplied } = this.state
    return (
      <div className='container15'>
        <Header jobs="true" home="false" />

        <div className='headercon'>
        
        {this.a()}

        {this.b()}

        {this.c()}

          {/* <div >
            
              <p onClick={this.after} className="headerz">Open to Apply</p>
              <hr className='horizon' />
            
          </div>

          <div >
              <p className="headery">Not applied</p>
          </div>

          <div >
              <p className="headery">Applied</p>
          </div> */}
        </div>
        <hr className='horizonbottom' />

        {openToApply && this.open()}

        {notApplied && this.not()}

        {applied && this.apply()}

        {/* <h1 className='head15'>Oppurtunities Avaliable</h1>

        {there1 && (
          <ul className='card15'>{
            list1.map(every =>
              (<JobItemopentoapply details={every} key={every.id} />))
          }</ul>
        )} */}

      </div>
    )
  }
}

export default Jobsopentoapply