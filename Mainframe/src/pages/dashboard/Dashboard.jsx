import React, { Component } from 'react'
import About from '../about/About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import AuthTopbar from "../../components/topbar/AuthTopbar"

export default function Dashboard(props){
    
    return(<div>
      <AuthTopbar/>
         <Router>
      <Switch>
        <Route path="/dashboard/about">
          <About />
        </Route>
        
        
        
      </Switch>
    </Router>
    </div>
    
       
    )
}