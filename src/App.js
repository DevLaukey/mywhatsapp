import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';



function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">

      {
        !user ? (
         <Login />
        ) : (

            <div className="app_body">
              <Router>
                < Sidebar />
                <Switch>
                  <Route path="/rooms/:roomId">
                    < Chat />
                  </Route>
                  <Route path="/">
                    < Chat />
                  </Route>
                </Switch>
              </Router>
            </div>
          )
      }


    </div>
  );
}

// https://www.youtube.com/watch?v=pUxrDcITyjg&t=441s   3:05:47        

export default App;
