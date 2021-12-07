import NavBar from '../../Components/NavBar/NavBar';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './SignIn/SignIn';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path='/signIn' element={<SignIn />}/>
        <Route path='/changePassword' element={<ChangePassword />}/>
      </Routes>


    </div>
  );

}

export default Auth;
