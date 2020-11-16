import React from 'react';

import classes from './RadioButton.module.css';

const radiobutton = (props) => {
  return (
      <label className={classes.RadioButton}>
      <input type="radio" name="Testradio" id="RadioBtn" vale="Testradio1"> 
      </input>
      <span className={classes.checkmark} ></span>
      </label>
  );
}
export default radiobutton;