import Sidebar from '../../Components/Sidebar/Sidebar';
import SearchClientByNameForm from '../../Components/Forms/SearchClientByNameForm/SearchClientByNameForm';
import SearchClientByTDCForm from '../../Components/Forms/SearchClientByTDCForm/SearchClientByTDCForm';
import { Route } from 'react-router-dom';
import SearchClientByTDDForm from '../../Components/Forms/SearchClientByTDDForm/SearchClientByTDDForm';
import SearchClientByCISForm from '../../Components/Forms/SearchClientByCISForm/SearchClientByCISForm';
import SearchClientByAccountNumberForm from '../../Components/Forms/SearchClientByAccountNumberForm/SearchClientByAccountNumberForm';

const Layout = () => {

  return (
    <Sidebar>
      <Route path="/layout/searchClient/name" component={SearchClientByNameForm}/>
      <Route path="/layout/searchClient/tdc" component={SearchClientByTDCForm}/>
      <Route path="/layout/searchClient/tdd" component={SearchClientByTDDForm}/>
      <Route path="/layout/searchClient/cis" component={SearchClientByCISForm}/>
      <Route path="/layout/searchClient/accountNumber" component={SearchClientByAccountNumberForm}/>
    </Sidebar>
  )

}

export default Layout;
