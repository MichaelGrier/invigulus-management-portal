import React, {Component} from 'react';


import classes from './LandingPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LandingPageCards from '../../components/UI/Cards/LandingPageCards/LandingPageCards';
<<<<<<< HEAD

=======
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';
import FormLabel from '../../components/Form Inputs/FormLabel/FormLabel';
import TextBox from '../../components/Form Inputs/TextBox/TextBox';
import FormContainer from '../../containers/FormContainer/FormContainer';
import Button from '../../components/UI/Button/Button';
>>>>>>> AndriesBranch

class LandingPage extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <main className={classes.main}>
          <h1 className={classes.header}>Invigulus Management Portal</h1>
          <LandingPageCards>Manage Organizations</LandingPageCards>
        </main>
<<<<<<< HEAD
=======
        <LandingPageCards>Manage Organizations</LandingPageCards>
>>>>>>> AndriesBranch
        <Footer />
      </div>
    );
  }
}

export default LandingPage;