import React from 'react';

import classes from './Heading2.module.css';

const heading2 = (props) => {
  return (
    <h2 className={classes.Heading2} for="test">{props.children}</h2>
  );
}

export default heading2;