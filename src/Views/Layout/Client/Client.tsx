import React from 'react';
import PersonDataTabs from '../../../Components/Tabs/PersonDataTabs/PersonDataTabs';
import { Route, Routes } from 'react-router-dom';
import PersonalIdentityForm from '../../../Components/Forms/PersonalIdentityForm/PersonalIdentityForm';
import PersonalFiscalDataForm from '../../../Components/Forms/PersonalFiscalDataForm/PersonalFiscalDataForm';
import AddressForm from '../../../Components/Forms/AddressForm/AddressForm';


const routes = [
  'client/identity',
  'client/address',
  'client/fiscal'
];

const Client = () => {

  return (
    <React.Fragment>
      <PersonDataTabs>{routes}</PersonDataTabs>
      <Routes>
        <Route path="/identity" element={<PersonalIdentityForm/>}/>
        <Route path="/address" element={<AddressForm/>}/>
        <Route path="/fiscal" element={<PersonalFiscalDataForm/>}/>
      </Routes>
    </React.Fragment>

  );
}

export default Client;
