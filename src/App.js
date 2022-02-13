import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Homecomponent from './components/Homecomponent';
import Logout from './Pages/Logout';
import PrivateRoute from './Pages/PrivateRoute';








function App() {
  


  return (
  
    <Router>
      
    <Switch>
        <Route exact path="/"> <Login/> </Route>
         <Route exact path="/register"> <Register/> </Route>
         <Route exact path="/logout"> <Logout/> </Route>
          <PrivateRoute page={<Homecomponent/>}/>
          
       
    </Switch>
    </Router>
  
  );
}

export default App;
