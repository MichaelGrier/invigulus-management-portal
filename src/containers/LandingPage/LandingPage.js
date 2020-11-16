import React, {Component} from 'react';

import classes from './LandingPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LandingPageCards from '../../components/UI/Cards/LandingPageCards/LandingPageCards';
import RadioButton from '../../components/Form Inputs/RadioButton/RadioButton';
import DropDown from '../../components/Form Inputs/DropDown/DropDown';
import Heading2 from '../../components/Form Inputs/Heading2/Heading2';
import FormLabel from '../../components/Form Inputs/FormLabel/FormLabel';
import TextBox from '../../components/Form Inputs/TextBox/TextBox';
import Heading1 from '../../components/Heading1/Heading1';
import FormContainer from '../../containers/FormContainer/FormContainer';

class LandingPage extends Component {
  buttonClickedHandler = () => {
    alert('You clicked a button');
  }

  render () {
    return (
      <div>
        <NavBar />
        <main className={classes.main}>
          <h1 className={classes.header}>Invigulus Management Portal</h1>
        </main>
        <LandingPageCards>Manage Organizations</LandingPageCards>
        <FormContainer> 
          <Heading2>Test Form</Heading2>
          <FormLabel>Test Label</FormLabel> <br/>

          </FormContainer>

        <br/>
        <Heading1>Heading 1</Heading1>
        <br/>
        <Heading2>Heading 2</Heading2>
        <br/>
        <RadioButton/>

        <Footer />
      </div>
    );
  }
}

export default LandingPage;