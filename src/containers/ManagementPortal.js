import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import LoginPage from '../containers/LoginPage/LoginPage';
import LandingPage from './LandingPage/LandingPage';
import OrgsAndTests from './OrgsAndTests/OrgsAndTests';
import ManageOrgs from './ManageOrgs/ManageOrgs';
import ManageTests from './ManageTests/ManageTests';
import ViewUsers from './ViewUsers/ViewUsers';
//import ViewSession from './ViewSessions/ViewSession/ViewSession';
import ViewSessions from './ViewSessions/ViewSessions';
import OrgForm from './OrgForm/OrgForm';
import TestForm from './TestForm/TestForm';
import AddTestConfirmation from './ConfirmationPages/AddTestConfirmation/AddTestConfirmation';

class ManagementPortal extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Route path='/' exact component={LandingPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/manage-orgs-and-tests' exact component={OrgsAndTests} />
        <Route path='/manage-orgs' exact component={ManageOrgs} />
        <Route path='/manage-tests' exact component={ManageTests} />
        <Route path='/manage-users' exact component={ViewUsers} />
        <Route path='/view-sessions' exact component={ViewSessions} />
        <Route path= '/add-edit-orgs' exact component={OrgForm} />
        <Route path= '/add-test' exact component={TestForm}/>
        <Route path= '/add-test-confirmation' exact component={AddTestConfirmation}/>

        <Footer />
      </>
    );
  }
}

export default ManagementPortal;