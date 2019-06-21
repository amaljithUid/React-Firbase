import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/porjects/ProjectDetails';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import CreateProject from './components/porjects/CreatProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
