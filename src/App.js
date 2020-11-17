import React, {Component} from 'react';
import './App.css';

import LandingPage from './containers/LandingPage/LandingPage';
import ManageOrgs from './containers/ManageOrgs/ManageOrgs';
import ManageUsers from './containers/ManageUsers/ManageUsers';
import ViewSessions from './containers/ViewSessions/ViewSessions';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LandingPage/> */}
        {/*<ManageOrgs />*/}
        {/* <ManageUsers /> */}
        <ViewSessions />
      </div>
    );
  }
}

export default App;
