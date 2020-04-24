import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Student from './components/Student';
import Tutor from './components/Tutor'
import './assets/css/style.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Router>
    <Switch>
      <Route exact path= "/">
          <Home />
      </Route>
      <Route path= "/student">
          <Student />
      </Route>
      <Route path= "/tutor">
          <Tutor />
      </Route>
    </Switch>
     

    </Router>
    </div>
    
  );
}

export default App;
