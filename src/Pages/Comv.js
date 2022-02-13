import React from 'react'
import useFetch from '../components/useFetch';
import { useState } from 'react'



const Comv = () => {
    /// Get Item///
    const {data:form, isPending,error}= useFetch(' http://127.0.0.1:8000/apis/comviewset/');

    const [name,setName]=useState('');
    const [desc,setDesc]=useState('');
    const [contact,setContact]=useState('');
    const [address,setAddress]=useState('');
    
    
    /// POST Item ///
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form={name,desc,address,contact}
        fetch(' http://127.0.0.1:8000/apis/comviewset/',{
            method:'POST',
            headers:{"Content-Type":"application/json", Authorization:  'Bearer ' + localStorage.getItem('access_token') },
            body:JSON.stringify(form)
        }).then(()=>{
            setName('')
            setDesc('')
            setContact('')
            setAddress('')
            window.location.reload()
        })
    }
  //// DELETE  Item ////
    function deleteitem(id){
      fetch(`http://127.0.0.1:8000/apis/comviewset/${id}/`,{
        method:'DELETE',
        headers:{ Authorization:  'Bearer ' + localStorage.getItem('access_token'),  },
        }).then(()=>{ window.location.reload() }).catch((err)=>{console.log(err)})
      
    }
    /// UPDATE ITEM ///
    function updateitem(name,contact,desc,address){
    setName(name)
    setContact(contact)
    setDesc(desc)
    setAddress(address)
    }
      
    
    return (
      
        <>
        {/* Preview Form */}

        {error && <div className="content-wrapper">{error}</div>} 
        {isPending&&<div className="content-wrapper">Loading...</div>}
        {form&&
        <div className="content-wrapper">
        <div className='row'>
         <div className="col-md-12 grid-margin stretch-card">
          <div className="card" >
           <div className="card-body mx-2 my-2" style={{'height':'500px'}}>
            <h4 className="card-title">Companies</h4>
            
             <div className="table-responsive">
              <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Description</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
              
                {form.map((form)=>(
                <tr key={form.id}>
                  
                  <td>{form.name}</td>
                  <td>{form.contact}</td>
                  <td>{form.desc}</td>
                  <td>{form.address}</td>
                  <td>
                    <button className='btn-sm  btn-inverse-danger ' onClick={()=>(deleteitem(form.id))}>Delete</button>
                    <button className='btn-sm btn-inverse-primary mx-2' onClick={()=>(updateitem(form.name, form.contact, form.address,form.desc))}>Update</button>
                    </td>
                  
                </tr>
                ))}
              
               
              </tbody>
            </table>
          </div>
        </div>
        </div>
        </div>

        {/* Adding Form */ }
        
                        
                          
        <div className="col-lg-12 grid-margin stretch-card" >
          <div className="card">
          <div className="card-body mx-2 my-2">
                <div className="card-body">
              <h4 className="card-title">ADD Companies</h4>
              <p className="card-description">
              These are all Medicine supplier Companies
              </p>
              <form className="forms-sample" onSubmit={handleSubmit }>
              <div className="form-group">
                  <label htmlFor="exampleInputName1">Name</label>
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" name='name'  id="exampleInputName1" placeholder="Name"/>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail3">Contact</label>
                  <input type="text"  value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" name='contact' id="exampleInputEmail3" placeholder="Email"/>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword4">Address</label>
                  <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" name='address' id="exampleInputPassword4" placeholder="Password"/>
              </div>
              
              <div className="form-group">
                  <label htmlFor="exampleInputCity1">Deciption</label>
                  <input type="text-area" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" name='desc' id="exampleInputCity1" placeholder="Location"/>
              </div>
              <button type="submit" className="btn btn-primary me-2">Submit</button>
              <button className="btn btn-light">Cancel</button>
              </form>
              </div>



            </div>
          </div>
        </div>
        </div>
      </div>

           
       }
    </>
    )
}

export default Comv
