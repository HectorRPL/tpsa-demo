import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import AddressForm from '../AddressForm/AddressForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const PersonalFiscalDataForm = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="rfc" label="RFC"/>
        <TextField id="curp" label="CURP"/>
        <TextField id="name" label="Nombre / Razón Social"/>
      </form>
      <AddressForm />
    </React.Fragment>
  );


}

export default PersonalFiscalDataForm;
