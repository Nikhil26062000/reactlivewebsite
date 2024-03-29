import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import History from './History';
import { Switch, Route,Redirect } from 'react-router-dom';

const App = () => {
  return(
    <>
    <Navbar />
      <Switch>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/history" component={History} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App;