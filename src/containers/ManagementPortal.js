import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import OrgsAndTests from './OrgsAndTests/OrgsAndTests';
import ManageOrgs from './ManageOrgs/ManageOrgs';
import ManageTests from './ManageTests/ManageTests';
import ManageUsers from './ManageUsers/ManageUsers';
import ViewSessions from './ViewSessions/ViewSessions';

class ManagementPortal extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Route path='/' exact component={LandingPage} />
        <Route path='/manage-orgs-and-tests' exact component={OrgsAndTests} />
        <Route path='/manage-orgs' exact component={ManageOrgs} />
        <Route path='/manage-tests' exact component={ManageTests} />
        <Route path='/manage-users' exact component={ManageUsers} />
        <Route path='/view-sessions' exact component={ViewSessions} />

        <Footer />
      </>
    );
  }
}

export default ManagementPortal;