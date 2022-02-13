import React from 'react'
import useFetch from '../components/useFetch';
//import { useHistory } from 'react-router';
import  {useState} from 'react';



  
const Medv = () => {

    const {data:form,isPending,error}= useFetch(' http://127.0.0.1:8000/apis/medviewset/');
    const{data:coms}=useFetch(' http://127.0.0.1:8000/apis/comviewset/');
    const [name,setName]=useState('');
    const [company_id,setCompany_id]=useState('');
    const [desc,setDesc]=useState('');
    const [sell_price,setSell_price]=useState('');
    const [buy_price,setBuy_price]=useState('');
    const [in_stock,setIn_stock]=useState('');
    const [shelf_no,setShelf_no]=useState('');
    const [added_on,setAdded_on]=useState('');


    
    
    
    //const history=useHistory();
    
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form={name,desc,sell_price,buy_price,in_stock,shelf_no,company_id}
        
        fetch(' http://127.0.0.1:8000/apis/medviewset/',{
            method:'POST',
            headers:{"Content-Type":"application/json",Authorization:  'Bearer ' + localStorage.getItem('access_token') },
            body:JSON.stringify(form),
            
            
        }).then(()=>{
            console.log('New form added')
            console.log(form)
            setName('')
            setAdded_on('')
            setBuy_price('')
            setCompany_id('')
            setDesc('')
            setIn_stock('')
            setSell_price('')
            setShelf_no('')
            window.location.reload()
        })
    }
    //// DELETE  Item ////
    function deleteitem(id){
      fetch(`http://127.0.0.1:8000/apis/medviewset/${id}/`,{
        method:'DELETE',
        headers:{ Authorization:  'Bearer ' + localStorage.getItem('access_token'),  },
        }).then(()=>{ window.location.reload() }).catch((err)=>{console.log(err)})
      
    }
    
    return (
        <>
        {error && <div className="content-wrapper">{error}</div>} 
        {isPending&&<div className="content-wrapper">Loading...</div>}
        {form && 
           <div className="content-wrapper">
            <div className="col-lg-12 grid-margin stretch-card">
            <div className="card ">
            < div className="card-body mx-2 my-2"style={{'height':'500px'}}>
             <h4 className="card-title">Medicine</h4>
              <div className="table-responsive ">
               <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Selling Price</th>
                    <th>Bought Price</th>
                    <th>Description</th>
                    <th>Total Stock</th>
                    <th>Shelf No</th>
                    <th>Date</th>
                    
                  </tr>
                </thead>
                <tbody>
              
                {form.map((form)=>(
                  <tr key={form.id}>
                    <>
                    <td>{form.name}</td>
                    <td>{form.company.name}</td>
                    <td>{form.sell_price}</td>
                    <td>{form.buy_price}</td>
                    <td>{form.desc}</td>
                    <td>{form.in_stock}</td>
                    <td>{form.shelf_no}</td>
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
                <h4 className="card-title">Medicine</h4>
                <p className="card-description">
                Manage Your Medicine Stock
                </p>
                <form className="forms-sample" onSubmit={handleSubmit }>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" name='name'  id="exampleInputName1" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Company</label>
                  {coms &&<select
                       type='text' value={company_id}  onChange={(e)=>setCompany_id(e.target.value)} className="form-control" name='company_id'  >
                      {coms.map((item)=>(
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))
                        }
                  </select>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" name='desc'   />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Total Stock</label>
                    <input type="integer" value={in_stock} onChange={(e)=>setIn_stock(e.target.value)} className="form-control" name='in_stock'   />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Shelf_No</label>
                    <input type="text" value={shelf_no} onChange={(e)=>setShelf_no(e.target.value)} className="form-control" name='shelf_no'   />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Unit Price</label>
                    <input type="text" value={buy_price} onChange={(e)=>setBuy_price(e.target.value)} className="form-control" name='buy_price'   />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Retail Price</label>
                    <input type="integer" value={sell_price} onChange={(e)=>setSell_price(e.target.value)} className="form-control" name='sell_price'   />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Added_on</label>
                    <input type="date" value={added_on} onChange={(e)=>setAdded_on(e.target.value)} className="form-control" name='added_on'   />
                </div>
                <button type="submit" className="btn btn-primary mx-2" >Submit</button>
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

export default Medv
