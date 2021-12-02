import NavBar from '../../Components/NavBar/NavBar';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './SignIn/SignIn';
import { Route } from 'react-router-dom';
import ChangePassword from './ChangePassword/ChangePassword';

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

const Auth = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <NavBar/>

      <Route path='/auth/signIn' component={SignIn}/>
      <Route path='/auth/changePassword' component={ChangePassword}/>

    </div>
  );

}

export default Auth;
