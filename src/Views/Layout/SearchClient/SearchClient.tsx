/*
const SearchClient = () => {

}

export default SearchClient;
*/

import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 600,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const SearchClient = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={0}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >

        <Tab label="Nombre" component={Link} to="/layout/searchClient/name"/>
        <Tab label="TDC"    component={Link} to="/layout/searchClient/tdc"/>
        <Tab label="TDD"    component={Link} to="/layout/searchClient/tdd"/>
        <Tab label="cis"    component={Link} to="/layout/searchClient/cis"/>
        <Tab label="CTA"    component={Link} to="/layout/searchClient/accountNumber"/>
      </Tabs>

      <TabPanel value={0} index={0}>{props.children}</TabPanel>
      <TabPanel value={0} index={1}>{props.children}</TabPanel>
      <TabPanel value={0} index={2}>{props.children}</TabPanel>
      <TabPanel value={0} index={3}>{props.children}</TabPanel>
      <TabPanel value={0} index={4}>{props.children}</TabPanel>
    </div>
  );
}

export default SearchClient;
