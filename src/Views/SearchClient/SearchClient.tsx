import { Route, Routes } from 'react-router-dom';
import SearchClientByNameForm from '../../Components/Forms/SearchClientByNameForm/SearchClientByNameForm';
import SearchClientByTDCForm from '../../Components/Forms/SearchClientByTDCForm/SearchClientByTDCForm';
import SearchClientByTDDForm from '../../Components/Forms/SearchClientByTDDForm/SearchClientByTDDForm';
import SearchClientByCISForm from '../../Components/Forms/SearchClientByCISForm/SearchClientByCISForm';
import SearchClientByAccountNumberForm
  from '../../Components/Forms/SearchClientByAccountNumberForm/SearchClientByAccountNumberForm';
import React from 'react';
import SearchClientTabs from '../../Components/Tabs/SearchClientTabs/SearchClientTabs';
import NavBar from '../../Components/NavBar/NavBar';

const SearchClient = () => {

  return (
    <React.Fragment>
      <NavBar/>
      <SearchClientTabs>
        <Routes>
          <Route path="/name" element={<SearchClientByNameForm/>}/>
          <Route path="/tdc" element={<SearchClientByTDCForm/>}/>
          <Route path="/tdd" element={<SearchClientByTDDForm/>}/>
          <Route path="/cis" element={<SearchClientByCISForm/>}/>
          <Route path="/accountNumber" element={<SearchClientByAccountNumberForm/>}/>
        </Routes>
      </SearchClientTabs>
    </React.Fragment>
  );
}

export default SearchClient;
