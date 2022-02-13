import React ,{ useState } from 'react'
//import { useHistory } from 'react-router';
import useFetch from '../components/useFetch';

const Emplsal = () => {
    const {data:form,isPending,error}= useFetch(' http://127.0.0.1:8000/apis/emplosalviewset/');
    const [employee_id,setEmployee_id]=useState('');
    const [salary_date,setSalary_date]=useState('');
    const [salary_amount,setSalary_amount]=useState('');
    const [added_on,setAdded_on]=useState('');
 
    
    //const history=useHistory();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form={employee_id,salary_amount,salary_date,added_on}
        fetch(' http://127.0.0.1:8000/apis/emplosalviewset/',{
            method:'POST',
            headers:{"Content-Type":"application/json",Authorization:  'Bearer ' + localStorage.getItem('access_token') },
            body:JSON.stringify(form)
        }).then(()=>{
            console.log('New form added')
            console.log(form)
            setEmployee_id('')
            setAdded_on('')
            setSalary_amount('')
            setSalary_date('')
            window.location.reload()
        })
    }

    //// DELETE  Item ////
    function deleteitem(id){
      fetch(`http://127.0.0.1:8000/apis/emplosalviewset/${id}/`,{
        method:'DELETE',
        headers:{ Authorization:  'Bearer ' + localStorage.getItem('access_token'),  },
        }).then(()=>{ window.location.reload() }).catch((err)=>{console.log(err)})
      
    }
    return (
        
    <>
    {error && <div className="content-wrapper">{error}</div>} 
    {isPending&&<div className="content-wrapper">Loading...</div>}
    {form&&
        <div className="content-wrapper">
             <div className="col-lg-12 grid-margin stretch-card">
             <div className="card ">
             < div className="card-body mx-2 my-2">
              <h4 className="card-title">Manage Salaries</h4>
               <div className="table-responsive ">
                <table className="table table-hover">
                 <thead>
                   <tr>
                     <th>Name</th>
                     <th>Joining_date</th>
                     <th>Salary</th>
                     <th>Added_on </th>                    
                   </tr>
                 </thead>
                 <tbody>
               
                 {form.map((form)=>(
                   <tr key={form.id}>
                     <>
                     <td>{form.employee.name}</td>
                     <td>{form.salary_date}</td>
                     <td>{form.salary_amount}</td>
                     <td>{form.added_on}</td>
                     
                     <td>
                     <button className='btn-sm  btn-inverse-danger ' onClick={()=>(deleteitem(form.id))}>Delete</button>
                     <button className='btn-sm btn-inverse-primary mx-2'>Update</button>
                     </td>
                     </>
                   </tr>
                 ))} 
                 
                 </tbody>
               </table>
               </div>
               </div>
             </div>
             </div>
 



          <div className="col-lg-12 grid-margin stretch-card">
                <div className="card ">
                < div className="card-body mx-2 my-2">

                <div className="card-body">
                <h4 className="card-title">Salaries</h4>
                <p className="card-description">
                These are all Employees's Salaries
                </p>
                <form className="forms-sample" onSubmit={handleSubmit }>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" value={employee_id} onChange={(e)=>setEmployee_id(e.target.value)} className="form-control" name='employee'  placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Joining Date</label>
                    <input type="date" value={added_on} onChange={(e)=>setAdded_on(e.target.value)} className="form-control" name='added_on'  placeholder="Address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Salary</label>
                    <input type="text" value={salary_amount} onChange={(e)=>setSalary_amount(e.target.value)} className="form-control" name='salary_amount'  placeholder="Contact"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Date</label>
                    <input type="date" value={salary_date} onChange={(e)=>setSalary_date(e.target.value)} className="form-control" name='salary_date'  placeholder="Added_on"/>
                </div>
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <button className="btn btn-light">Cancel</button>
                </form>
                </div>
                </div>
                </div>
         </div>
    </div>
       

    }
    </>
)
}
export default Emplsal
