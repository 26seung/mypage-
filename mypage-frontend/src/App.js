import React from 'react';
import { Switch, Route } from "react-router-dom";
import Join from './components/user/join/Join';
import Login from './components/user/login/Login';
import Profile from './components/user/profile/Profile';

const App = () => {
  return (
    <div>    
    <div className="container mt-3">       
      <Switch>
        {/* <Route exact path={["/", "/home"]} component={Home} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  </div>
  );
};

export default App;