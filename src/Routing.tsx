import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './Views/Layout/Layout';
import Auth from './Views/Auth/Auth';

const Routing = () => {
  return (

    <Routes>
      {/*
      // https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb
      <Route path="/" render={() => <Redirect to="/auth/signIn"/>}/>
      */}
      <Route path="/auth/*" element={<Auth/>}/>
      <Route path="/layout/*" element={<Layout/>}/>
    </Routes>

  )
}

export default Routing;
