import Sidebar from '../../Components/Sidebar/Sidebar';
import SearchClientByNameForm from '../../Components/Forms/SearchClientByNameForm/SearchClientByNameForm';
import SearchClientByTDCForm from '../../Components/Forms/SearchClientByTDCForm/SearchClientByTDCForm';
import { Route, Routes } from 'react-router-dom';
import SearchClientByTDDForm from '../../Components/Forms/SearchClientByTDDForm/SearchClientByTDDForm';
import SearchClientByCISForm from '../../Components/Forms/SearchClientByCISForm/SearchClientByCISForm';
import SearchClientByAccountNumberForm
  from '../../Components/Forms/SearchClientByAccountNumberForm/SearchClientByAccountNumberForm';
import SearchClient from './SearchClient/SearchClient';
import Divider from '@material-ui/core/Divider';
import Client from './Client/Client';
import Simulator from './Simulator/Simulator';
import CoCredited from './CoCredited/CoCredited';


const Layout = () => {

  return (

    <Sidebar>


      <Divider/>

      <Routes>
        <Route path="/searchClient/*" element={
          <SearchClient>
            <Routes>
              <Route path="/name" element={<SearchClientByNameForm/>}/>
              <Route path="/tdc" element={<SearchClientByTDCForm/>}/>
              <Route path="/tdd" element={<SearchClientByTDDForm/>}/>
              <Route path="/cis" element={<SearchClientByCISForm/>}/>
              <Route path="/accountNumber" element={<SearchClientByAccountNumberForm/>}/>
            </Routes>
          </SearchClient>}/>
        <Route path="/client/*" element={<Client/>}/>
        <Route path="/coCredited/*" element={<CoCredited/>}/>
        <Route path="/simulator" element={<Simulator/>}/>
      </Routes>
    </Sidebar>
  )

}

export default Layout;
