import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './Views/SignIn/SignIn';
import React from 'react';
import Layout from './Views/Layout/Layout';

const Routing = () => {
  return (
    <Switch>

      <Route path="/" exact>
        <Redirect to="/signIn"/>
      </Route>

      <Route path="/layout" component={Layout}/>
      <Route path="/signIn" component={SignIn}/>

    </Switch>
  )
}

export default Routing;
