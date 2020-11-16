import React, {Component} from 'react';

import classes from './LoingPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import TextBox from '../../components/Form Inputs/TextBox/TextBox';
import FormLabel from '../../components/Form Inputs/FormLabel/FormLabel';
import DropDown from '../../components/Form Inputs/DropDown/DropDown';
import RadioButton from '../../components/Form Inputs/RadioButton/RadioButton';
import Button from '../../components/UI/Button/Button';

class LoginPage extends Component {
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
        <Footer />
      </div>
    );
  }
}

export default LoginPage;