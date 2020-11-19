import React, {Component} from 'react';
import './App.css';

//import LandingPage from './containers/LandingPage/LandingPage';
//import ManageOrgs from './containers/ManageOrgs/ManageOrgs';
//import LoginPage from './containers/LoginPage/LoginPage';
import UserPage from './containers/UserPage/UserPage';



class App extends Component {
  render() {
    return (
      <div className="App">
        <UserPage/>
        {/*<LoginPage/>*/}
        {/*<ManageOrgs />*/}
      </div>
    );
  }
}

export default App;
