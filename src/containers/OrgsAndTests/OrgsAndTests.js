import React, {Component} from 'react';


import classes from './OrgsAndTests.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import OrgsAndTestsCards from '../../components/UI/Cards/OrgsAndTestsCards/OrgsAndTestsCards';

class OrgsAndTests extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <main className={classes.main}>
          <h1 className={classes.header}>Organizations and Tests</h1>
          <OrgsAndTestsCards>Manage Organizations</OrgsAndTestsCards>
        </main>
        <Footer />
      </div>
    );
  }
}

export default OrgsAndTests;