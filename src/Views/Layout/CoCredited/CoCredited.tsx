import PersonDataTabs from '../../../Components/Tabs/PersonDataTabs/PersonDataTabs';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalIdentityForm from '../../../Components/Forms/PersonalIdentityForm/PersonalIdentityForm';
import AddressForm from '../../../Components/Forms/AddressForm/AddressForm';
import PersonalFiscalDataForm from '../../../Components/Forms/PersonalFiscalDataForm/PersonalFiscalDataForm';

const routes = [
  'coCredited/identity',
  'coCredited/address',
  'coCredited/fiscal'
];

const CoCredited = () => {

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

export default CoCredited;
