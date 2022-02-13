import React, { useState } from 'react'
import useFetch from '../components/useFetch';
import { useHistory } from 'react-router';

const Bill = () => {
    const {data:form, isPending,error}= useFetch(' http://127.0.0.1:8000/apis/billviewset/');
    const {data:meds}= useFetch(' http://127.0.0.1:8000/apis/medviewset/');
    const [qty,setQty]=useState('');
    const[medicine_id,setMedicine_id]=useState('');
    const[added_on,setAdded_on]=useState('');
    const history=useHistory();
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form={qty,medicine_id,added_on}
        fetch(' http://127.0.0.1:8000/apis/billviewset/',{
            method:'POST',
            headers:{"Content-Type":"application/json",Authorization:  'Bearer ' + localStorage.getItem('access_token') },
            body:JSON.stringify(form)
        }).then(()=>{
            console.log('New form added')
            console.log(form)
            setQty('')
            setMedicine_id('')
            setAdded_on('')
            history.push('/bill');
        })
    }
    return (
        <>
        {error && <div className="content-wrapper">{error}</div>} 
        {isPending&&<div className="content-wrapper">Loading...</div>}
        {form&&
        <div className="content-wrapper">
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card ">
                <div className="card-body mx-2 my-2">
                <div className="card-body">
                    <h4 className="card-title">Bill</h4>
                    <p className="card-description">
                    Generate Slip
                    </p>
                <form className="forms-sample" onSubmit={handleSubmit }>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Medicine</label>
                    {meds&&<select
                    type="text" value={medicine_id} onChange={(e)=>setMedicine_id(e.target.value)} className="form-control" name='medicine_id'  id="exampleInputName1" >
                        {meds.map((item)=>(
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Quantity</label>
                    <input type="integer" value={qty} onChange={(e)=>setQty(e.target.value)} className="form-control" name='qty'  id="exampleInputName1" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Added_on</label>
                    <input type="date" value={added_on} onChange={(e)=>setAdded_on(e.target.value)} className="form-control" name='added_on'  id="exampleInputName1" />
                </div>
                <button type="submit" className="btn btn-primary " >Generate Slip</button>
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

export default Bill
