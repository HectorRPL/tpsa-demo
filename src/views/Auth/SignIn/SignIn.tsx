import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignInForm from '../../../components/Forms/SignInForm/SignInForm';
import SignInButton from '../../../components/ButtonsCRUD/SignInButton/SignInButton';
import NavBar from '../../../components/NavBar/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const SignIn = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar/>
      <SignInForm/>
      <SignInButton/>
    </div>
  );
}

export default SignIn;
