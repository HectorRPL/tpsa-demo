import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const AddressForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="street" label="Calle"/>
      <TextField id="number" label="Número"/>
      <TextField id="city" label="Colonia"/>
      <TextField id="zipCode" label="Código Postal"/>
    </form>
  );


}

export default AddressForm;
