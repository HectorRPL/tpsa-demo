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

const ChangePasswordForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField id='currentPassword' label='Password actual'/>
      <TextField id='newPassword' label='Nuevo password'/>
      <TextField id='confirmNewPassword' label='Confirmar nuevo password'/>
    </form>
  );
}

export default ChangePasswordForm;
