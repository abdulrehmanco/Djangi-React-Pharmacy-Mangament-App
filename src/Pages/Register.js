import { Link } from 'react-router-dom'
import React ,{ useState} from 'react'
import { useHistory } from 'react-router-dom';



const Register = () => {
   const [username, setUsername]=useState('');
   const [password, setPassword]=useState('');
   const [name, setName]=useState('');
   const [email, setEmail]=useState('');
   
   const history=useHistory();
   const handleSubmit=(e)=>{
       e.preventDefault();
       const form={username,password,name,email}
       fetch(' http://127.0.0.1:8000/apis/register/',{
           method:'POST',
           headers:{"Content-Type":"application/json",Authorization:  'Bearer ' + localStorage.getItem('access_token') },
           body:JSON.stringify(form)
       }).then(()=>{
           console.log('New form added')
           console.log(form)
           history.push('/');     

           setUsername('');
           setPassword(''); 
       })
   }
    return (
    <>
    
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src="images/Marhaba.png" alt="logo"/>
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="fw-light">Register to continue.</h6>
                  <form className="pt-3" onSubmit={handleSubmit}>

                    <div className="form-group">
                      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name='username' className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name='name' className="form-control form-control-lg" id="exampleInputEmail2" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name='email' className="form-control form-control-lg" id="exampleInputEmail3" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name='password' className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type='submit'>Register</button>
                    </div>
                    
                   
                    <div className="text-center mt-4 fw-light">
                      Already have an account? <Link to="/" className="text-primary">Sign Up</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
         
        </div>
     </div> 
    
  </>
    )
}


export default Register
