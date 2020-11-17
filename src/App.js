import React, {Component} from 'react';
import './App.css';

import LandingPage from './containers/LandingPage/LandingPage';
//import ManageOrgs from './containers/ManageOrgs/ManageOrgs';
//import LoginPage from './containers/LoginPage/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
        {/*<ManageOrgs />*/}
      </div>
    );
  }
}

export default App;
