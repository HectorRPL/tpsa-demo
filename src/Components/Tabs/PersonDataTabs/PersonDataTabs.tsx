import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});


const PersonDataTabs = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<PersonPinIcon/>} label="Identidad" onClick={() => navigate(`/layout/${props.children[0]}`)}/>
        <Tab icon={<PhoneIcon/>} label="Dirección" onClick={() => navigate(`/layout/${props.children[1]}`)} />
        <Tab icon={<FavoriteIcon/>} label="Fiscal" onClick={() => navigate(`/layout/${props.children[2]}`)} />
      </Tabs>
    </Paper>
  );
}

export default PersonDataTabs;
