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


const PersonalIdentityForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="name" label="Nombre"/>
      <TextField id="lastname" label="Paterno"/>
      <TextField id="secondLastname" label="Materno"/>
    </form>
  );

}

export default PersonalIdentityForm;
