import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Home from './Home';
import styles from './LicenseManager.css';


class LicenseManager extends React.Component {
  state = {};
  

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={styles.toolbarTitle}>
            EU License Manager
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={styles.link}>
              Terms of Use
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={styles.link}>
              Support
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" className={styles.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          App Catalog
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Choose from the selection below for your request
        </Typography>
      </Container>
      <Route path="/" exact component={Home} />

      </React.Fragment>
    );
  }
}




export default LicenseManager;