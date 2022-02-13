import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';
import { useHistory } from 'react-router';

const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();
    const handleSubmit=(e)=>{
      e.preventDefault();
      const data={username:username,password:password}
       axios.post('http://127.0.0.1:8000/api/gettoken/',data)
       .then(
         (res) =>  { localStorage.setItem('access_token', res.data.access); 
                    localStorage.setItem('refresh_token', res.data.refresh); 
                    
                     axios.defaults.headers['Authorization']= 'JWT' + localStorage.getItem('access_token');
                    history.push('/dash') })
        .catch(err =>{ console.log(err)})

        }

    return (
 <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
              <span className='text' data-text="MARHABA" >
                MARHABA
              </span>
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="fw-light">Sign in to continue.</h6>

              <form className="pt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name='username' className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name='password' className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="mt-3">
                  <button type='submit' className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  >SIGN IN</button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      Keep me signed in
                    <i className="input-helper"></i></label>
                  </div>
                  <Link to="#" className="auth-link text-black">Forgot password?</Link>
                </div>
                <div className="mb-2">
                  <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                    <i className="ti-facebook me-2"></i>Connect using facebook
                  </button>
                </div>
                <div className="text-center mt-4 fw-light">
                  Don't have an account? <Link to="/register" className="text-primary">Create</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </div>
 </div> 
    )
}

export default Login
