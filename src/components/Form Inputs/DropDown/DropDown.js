import React from 'react';

import classes from './DropDown.module.css';

const dropdown = (props) => {
  return (
    <select className={classes.DropDown} id="Test" name="TestDropDown">
      <option value="option1">{this.props.option1}</option>
      <option value="option2">{this.props.option2}</option>
      <option value="option3">{this.props.option3}</option>
    </select>
  );
}

export default dropdown;