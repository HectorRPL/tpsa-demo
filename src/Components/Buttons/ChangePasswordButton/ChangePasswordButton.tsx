import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ChangePasswordButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Accept</Button>
    </div>
  );

}

export default ChangePasswordButton;
