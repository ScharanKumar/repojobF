import { Component } from 'react'
import Cookies from "js-cookie"
import "./index.css"

class AdminLogin extends Component {
  state = {
    username: "", password: "", showSubmitError: false,
    errorMsg: ''
  }
  y = (event) => {
    this.setState({ username: event.target.value })
  }
  x = (event) => {
    this.setState({ password: event.target.value })
  }
  reg = () => {
    const { history } = this.props
    history.replace("/register/admin")
  }
  onSubmitSuccess = jwtToken1 => {
    const { history } = this.props

    Cookies.set('jwt_token1', jwtToken1, { expires: 30 })
    this.setState({ showSubmitError: false, errorMsg: "" })
    history.replace('/admin/jobs')
  }

  onSubmitFailure = errorMsg => {
    this.setState({ showSubmitError: true, errorMsg })
  }
  log = async () => {
    const { username, password } = this.state
    if (username !== "" && password !== "") {
      const data = {
        username,
        password
      }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        },
        body: JSON.stringify(data)
      }
      const response = await fetch("https://resumejobboardback.onrender.com/login/admin", options)
      console.log(response)

      if (response.ok === true) {
        const resdata = await response.json()
        console.log(resdata)
        this.onSubmitSuccess(resdata.jwt_token)
      } else {
        const resdata1 = await response.text()
        console.log(resdata1)
        this.onSubmitFailure(resdata1)
      }
    }
  }
  render() {
    const { username, password, showSubmitError, errorMsg } = this.state
    return (
      <div className='container12'>
        <div>
          <img src='https://developers.line.biz/assets/img/products/line-login/p3.svg' alt='LoginImage' className='img1' />
        </div>

        <div className='box12'>
          <h1 className='headL'>Admin Login</h1>
          <div className='x12'>
            <label className='labelA' htmlFor="user">Username</label>
            <input className='inputAR' value={username} onChange={this.y} id='user' type="text" placeholder='Enter the username' />
          </div>

          <br />

          <div className='x12'>
            <label className='labelA' htmlFor="pass">Password</label>
            <input className='inputAR' value={password} onChange={this.x} id='pass' type="password" placeholder='Password' />
          </div>

          <div>
            <button onClick={this.log} className='but12' type='button' >Login</button>
            <button onClick={this.reg} className='but13' type='button' >Register</button>
          </div>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}


        </div>
      </div>
    )
  }
}

export default AdminLogin