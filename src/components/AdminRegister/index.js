import { Component } from 'react'
import "./index.css"

class AdminRegister extends Component {
    state = { username: "", password: "" }
    y = (event) => {
        this.setState({ username: event.target.value })
    }
    x = (event) => {
        this.setState({ password: event.target.value })
    }
    reg = async () => {
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
            const res1 = await fetch("https://resumejobboardback.onrender.com/register/admin", options)
            console.log(res1)
            const resdata = await res1.text()
            console.log(resdata)
            const { history } = this.props
            history.replace("/login/admin")
        }

    }
    render() {
        const { username, password } = this.state
        return (
            <div className='container11'>
                <div>
                    <img src='https://mybuddyinfo.jswpaints.in/Images/icon-register.png' alt='RegisterImage' className='img11' />
                </div>

                <div className='box11'>
                    <h1 className='headA'>Admin Register</h1>
                    <div className='x11'>
                        <label className='labelA' htmlFor="user">Username</label>
                        <input value={username} className='inputAR' onChange={this.y} id='user' type="text" placeholder='Enter the username' />
                    </div>

                    <br />

                    <div className='x11'>
                        <label className='labelA' htmlFor="pass">Password</label>
                        <input className='inputAR' value={password} onChange={this.x} id='pass' type="password" placeholder='Password' />
                    </div>

                    <div>
                        <button onClick={this.reg} className='but11' type='button' >Register</button>
                    </div>


                </div>
            </div>
        )
    }
}

export default AdminRegister