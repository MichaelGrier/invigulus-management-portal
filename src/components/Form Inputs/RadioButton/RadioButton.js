import React from 'react';

import classes from './RadioButton.module.css';

const radiobutton = () => {
  return (
    <div>
      <label id="labelr" className={classes.RadioButton}>
      <input type="radio" name="Testradio" id="RadioBtn" vale="Testradio1"> 
      </input>
      <span className={classes.checkmark}></span>
      </label>
      <label id="labelr" className={classes.RadioButton}>
      <input type="radio" name="Testradio" id="RadioBtn2" vale="Testradio1"> 
      </input>
      <span className={classes.checkmark} ></span>
      </label>
    </div>
  );
}
export default radiobutton;