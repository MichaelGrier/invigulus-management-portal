import React from 'react';

import classes from './TextBox.module.css';

const textbox = (props) => {
  return (
    <input className={classes.TextBox} type="text" id={props.id}></input>
  );
}

export default textbox;