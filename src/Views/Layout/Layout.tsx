import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Client from './Client/Client';
import Simulator from './Simulator/Simulator';
import CoCredited from './CoCredited/CoCredited';


const Layout = () => {

  return (
    <Sidebar>
      <Routes>
        <Route path="/client/*" element={<Client/>}/>
        <Route path="/coCredited/*" element={<CoCredited/>}/>
        <Route path="/simulator" element={<Simulator/>}/>
      </Routes>
    </Sidebar>
  )

}

export default Layout;
