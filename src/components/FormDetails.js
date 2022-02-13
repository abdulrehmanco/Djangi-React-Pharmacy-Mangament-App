import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from './useFetch';

const FormDetails = () => {
    const {id}= useParams();
    const {data:form,isPending,error}=useFetch('http://127.0.0.1:8000/api/comviewset/');
    const history=useHistory();
    const handleClick=()=>{
        fetch('http://127.0.0.1:8000/api/comviewset/'+ id).then(()=>{
            
            history.push('/');
        })
    }
    
    
    return (
        <div className="card-body" >
            <h4 class="card-title">Paragraph</h4>
            
                {form && <>
                    <h2>{form.name}</h2>
                    <h3>{form.contact}</h3>
                    <button onClick={handleClick}>Delete</button>
             </>
             }
        </div>
    )
}

export default FormDetails

