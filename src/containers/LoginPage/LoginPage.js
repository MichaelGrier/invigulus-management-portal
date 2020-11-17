import React, {Component} from 'react';

import classes from './LoginPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import TextBox from '../../components/Form Inputs/TextBox/TextBox';
import FormLabel from '../../components/Form Inputs/FormLabel/FormLabel';
import DropDown from '../../components/Form Inputs/DropDown/DropDown';
import RadioButton from '../../components/Form Inputs/RadioButton/RadioButton';
import Button from '../../components/UI/Button/Button'; 
import FormContainer from '../../containers/FormContainer/FormContainer';

class LoginPage extends Component {
  buttonClickedHandler = () => {
    alert('You clicked a button');
  }

  render () {
    return (
      <div>
        <NavBar />
        <main className={classes.main}>
          <FormContainer> 
              <FormLabel>Email:</FormLabel>
              <FormLabel>Password:</FormLabel>
              <TextBox/><br/>
              <Button>Submit</Button>
          </FormContainer>
        </main>
        <Footer />
      </div>
    );
  }
}

export default LoginPage;