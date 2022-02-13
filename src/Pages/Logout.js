import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const Logout = () => {
    const history = useHistory()
    useEffect (()=>{
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        history.push('/')
    })
  return <div>You Have been Logged Out</div>
};

export default Logout;
