import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Views/SignIn/SignIn';
import React from 'react';
import Layout from './Views/Layout/Layout';

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/layout' component={Layout}/>
        <Route path='/signIn' component={SignIn}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routing;
