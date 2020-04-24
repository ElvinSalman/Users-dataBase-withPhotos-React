import React from 'react';
import Users from './components/Users';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import User from './components/User/User'
import HomePage from './components/Welcome/HomePage';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar title='Some User Page'/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/users' component={Users}/>
    <Route exact path='/users/:id' component={User}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
