import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Layout from './Views/Layout/Layout';
import Auth from './Views/Auth/Auth';

const Routing = () => {
  return (
    <Switch>

      <Route path="/" exact>
        <Redirect to="/auth/signIn"/>
      </Route>

      <Route path="/auth" component={Auth}/>
      <Route path="/layout" component={Layout}/>

    </Switch>
  )
}

export default Routing;
