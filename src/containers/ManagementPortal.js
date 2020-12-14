import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Auth} from 'aws-amplify';

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import LoginPage from './LoginPage/LoginPage';
import LandingPage from './LandingPage/LandingPage';
import OrgsAndTests from './OrgsAndTests/OrgsAndTests';
import ManageOrgs from './ManageOrgs/ManageOrgs';
import ManageTests from './ManageTests/ManageTests';
import ViewUsers from './ViewUsers/ViewUsers';
import ViewSession from './ViewSessions/ViewSession/ViewSession';
import ViewSessions from './ViewSessions/ViewSessions';
import OrgForm from './OrgForm/OrgForm';
import TestForm from './TestForms/TestForm/TestForm';
import AddTestConfirmation from './ConfirmationPages/AddTestConfirmation/AddTestConfirmation';
import EditTestForm from './TestForms/EditTestForm/EditTestForm';
import AddOrgConfirmation from './ConfirmationPages/AddOrgConfirmation/AddOrgConfirmation';
import EditOrgForm from './EditOrgForm/EditOrgForm';
import ResetPassword from './ResetPassword/ResetPassword';
import ResetPasswordVerification from './ResetPasswordVerification/ResetPasswordVerification';
import ChangePassword from './ChangePassword/ChangePassword';
import ChangePasswordConfirmation from './ConfirmationPages/ChangePasswordConfirmation/ChangePasswordConfirmation';

class ManagementPortal extends Component {
  // set global state to track authentication and user object
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = (authenticated) => {
    this.setState({isAuthenticated: authenticated});
  }

  setUser = (user) => {
    this.setState({user: user})
  }
  
  // ensure login state persists through reloads
  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);

      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch(error) {
      console.log(error);
    }
    // update state
    this.setState({isAuthenticating: false});
  }

  render() {
    // pass global state and helper functions as props
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }

    return (
      !this.state.isAuthenticating &&
      <>
        <NavBar auth={authProps} />

        <Route path='/' exact render={(props) => <LandingPage {...props} auth={authProps} />} />
        <Route path='/login' exact render={(props) => <LoginPage {...props} auth={authProps} />} />
        <Route path='/manage-orgs-and-tests' exact render={(props) => <OrgsAndTests {...props} auth={authProps} />} />
        <Route path='/manage-orgs' exact render={(props) => <ManageOrgs {...props} auth={authProps} />} />
        <Route path='/manage-tests' exact render={(props) => <ManageTests {...props} auth={authProps} />} />
        <Route path='/view-users' exact render={(props) => <ViewUsers {...props} auth={authProps} />} />
        <Route path='/view-sessions' exact render={(props) => <ViewSessions {...props} auth={authProps} />} />
        <Route path='/view-selected-session' render={(props) => <ViewSession {...props} auth={authProps} />} />
        <Route path='/add-org' exact render={(props) => <OrgForm {...props} auth={authProps} />} />
        <Route path='/add-test' render={(props) => <TestForm {...props} auth={authProps} />} />
        <Route path='/add-test-confirmation' exact render={(props) => <AddTestConfirmation {...props} auth={authProps} />} />
        <Route path='/edit-test' render={(props) => <EditTestForm {...props} auth={authProps} />} />
        <Route path='/add-org-confirmation' exact render={(props) => <AddOrgConfirmation {...props} auth={authProps} />} />
        <Route path='/edit-org' render={(props) => <EditOrgForm {...props} auth={authProps} />} />
        <Route path='/reset-password' exact render={(props) => <ResetPassword {...props} auth={authProps} />} />
        <Route path='/reset-password-verification' exact render={(props) => <ResetPasswordVerification {...props} auth={authProps} />} />
        <Route path='/change-password' exact render={(props) => <ChangePassword {...props} auth={authProps} />} />
        <Route path='/change-password-confirmation' exact render={(props) => <ChangePasswordConfirmation  {...props} auth={authProps} />} />

        <Footer />
      </>
    );
  }
}

export default ManagementPortal;