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

const SearchClientByNameForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="name" label="Nombre"/>
      <br/>
      <TextField id="firstName" label="Apellido paterno"/>
      <br/>
      <TextField id="lastName" label="Apellido materno"/>
      <br/>
      <TextField id="birthDate" label="Fecha de nacimiento"/>
    </form>
  );
}

export default SearchClientByNameForm;
