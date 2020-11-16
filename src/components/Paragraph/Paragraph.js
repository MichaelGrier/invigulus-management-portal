import React from 'react';

import classes from './Paragraph.module.css';

const paragraph = (props) => {
  return (
    <p className={classes.Paragraph} for="test">{props.children}</p>
  );
}

export default paragraph;