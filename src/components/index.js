import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Route, NavLink } from 'react-router-dom';



import Header from './Header';
import Footer from './Footer';
import Terms from './Terms';
import AppList from './AppList';
import AppForm from './AppForm';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  appLogo: {
    width: 200,
    borderWidth: 1,
  },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: 800,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));





export default function LicenseManager() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <Header />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          App Catalog
        </Typography>

      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
      <Route path="/" exact component={AppList} />
      <Route path="/terms/:id" exact component={Terms} />
      <Route path="/app/:id" exact component={AppForm} />
      </Container>
      {/* <Route path="/" exact component={} /> */}
      {/* Footer */}
      <Footer />
      
      {/* End footer */}
    </React.Fragment>
  );
}