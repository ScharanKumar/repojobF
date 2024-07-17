import {Switch,Route} from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import AdminLogin from "./components/AdminLogin"
import AdminRegister from "./components/AdminRegister"
import AdminJobs from "./components/AdminJobs"
import ProtectedRoute1 from "./components/ProtectedRoute1"
import ProtectedRoute from "./components/ProtectedRoute"

import BlogItemDetailsStudent from "./components/BlogItemDetailsStudent"

import Jobsopentoapply from "./components/Jobsopentoapply"
// import Jobsnotapplied from "./components/Jobsnotapplied"
// import Jobsapplied from "./components/Jobsapplied"
import Appliedmembers from "./components/Appliedmembers"

const App=()=>{
  return(
  //  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/login/admin" component={AdminLogin}/>
        <Route exact path="/register/admin" component={AdminRegister}/>
        <ProtectedRoute1 exact path="/admin/jobs" component={AdminJobs}/>
        <ProtectedRoute1 exact path="/jobdes/admin/:id/:admin" component={BlogItemDetailsStudent} />
        <ProtectedRoute exact path="/jobdes/open/:id/:openToApply" component={BlogItemDetailsStudent} />
        <ProtectedRoute exact path="/jobdes/not/:id/:notApplied" component={BlogItemDetailsStudent} />
        <ProtectedRoute exact path="/jobdes/apply/:id/:applied" component={BlogItemDetailsStudent} />
        <ProtectedRoute1 exact path="/appliedmembers/:id" component={Appliedmembers} />
        <ProtectedRoute exact path="/jobs" component={Jobsopentoapply}/>
        {/* <ProtectedRoute exact path="/notApplied" component={Jobsnotapplied}/>
        <ProtectedRoute exact path="/applied" component={Jobsapplied}/> */}
       </Switch>
  //  </BrowserRouter> 
  )
}

export default App;
