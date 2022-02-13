import React from 'react';
import { BrowserRouter as  Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Comv from '../Pages/Comv';
import Medv from '../Pages/Medv';
import Custa from '../Pages/Custa';
import Bill from '../Pages/Bill';
import Emplsal from '../Pages/Emplsal';
import Empla from '../Pages/Empla';
import Footer from '../components/Footer';
import Dashboard from '../Pages/Dashboard';

const Homecomponent = () => {
  
  return  (
  <div className="container-scroller">
  <Navbar/>
  <div className="container-fluid page-body-wrapper">
  <Sidebar/>
  <div className="main-panel">
      <Switch>
       <Route exact path="/dash" > 
        <Dashboard/>
       </Route>
       <Route exact path="/viewcomp" > 
       <Comv/>
       </Route>
       <Route exact path="/createmed"> 
       <Medv/>
       </Route>
       <Route exact path="/cust">
       <Custa/>
       </Route>
       <Route exact path="/bill">
       <Bill/>
       </Route>
       <Route exact path="/emplo">
       <Empla/>
       </Route>
       <Route exact path="/emp_sal">
       <Emplsal/>
       </Route>
   </Switch>
    <Footer/>
     </div>
   </div>
   </div>
   
  )
};

export default Homecomponent;
