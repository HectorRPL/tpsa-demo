import Sidebar from '../../Components/Sidebar/Sidebar';
import SearchClientByNameForm from '../../Components/Forms/SearchClientByNameForm/SearchClientByNameForm';
import SearchClientByTDCForm from '../../Components/Forms/SearchClientByTDCForm/SearchClientByTDCForm';
import { Route, Routes } from 'react-router-dom';
import SearchClientByTDDForm from '../../Components/Forms/SearchClientByTDDForm/SearchClientByTDDForm';
import SearchClientByCISForm from '../../Components/Forms/SearchClientByCISForm/SearchClientByCISForm';
import SearchClientByAccountNumberForm
  from '../../Components/Forms/SearchClientByAccountNumberForm/SearchClientByAccountNumberForm';
import VerticalTabs from './SearchClient/SearchClient';
import Divider from '@material-ui/core/Divider';


const Layout = () => {

  return (

    <Sidebar>
      <h3>Elige un críterio de búsqueda</h3>
      <Divider/>
      <VerticalTabs>
        <Routes>
          <Route path="/searchClient/name" element={<SearchClientByNameForm/>}/>
          <Route path="/searchClient/tdc" element={<SearchClientByTDCForm/>}/>
          <Route path="/searchClient/tdd" element={<SearchClientByTDDForm/>}/>
          <Route path="/searchClient/cis" element={<SearchClientByCISForm/>}/>
          <Route path="/searchClient/accountNumber" element={<SearchClientByAccountNumberForm/>}/>
        </Routes>
      </VerticalTabs>
    </Sidebar>

  )

}

export default Layout;
