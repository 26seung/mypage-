import React from 'react';
import { Switch, Route } from "react-router-dom";
import home from './common/home';
import join from './components/user/join/join';
import login from './components/user/login/login';
import Profile from './components/user/profile/Profile';
import test from './components/user/login/test';
import AppAppBar from './common/AppAppBar';
import Footer from './common/footer';

const App = () => {
  return (
    <div>
      <div className="container mt-3">
        <AppAppBar />
        <Switch>
          <Route exact path={["/", "/home"]} component={home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/join" component={join} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/test" component={test} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default App;